import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {from, fromEvent, observable, Observable, of, Subscription} from "rxjs";
import {
  catchError, debounceTime,
  distinct,
  distinctUntilChanged,
  filter,
  finalize,
  first,
  map, pluck, switchMap,
  take,
  tap,
  toArray
} from "rxjs/operators";
import {createLogErrorHandler} from "@angular/compiler-cli/ngcc/src/execution/tasks/completion";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('search_input')
  input! : ElementRef;

  requests = 0;
  eventSubscription? : Subscription;

  data$ = new Observable<number>(observer => {
    observer.next(1);
    observer.error(new Error('Nope'));
    observer.next(2);
    observer.next(3);
    observer.next(4);
  })

  foo$ = of(1, 2, 2, 3, 3, 2 );

  books$ = of(
    {title: 'Frankenstein', author: 'Mary Shelley'},
    {title: 'Le Dernier Homme', author: 'Mary Shelley'},
    {title: 'Bilbo', author: 'Tolkien'},
    {title: 'Silmarillon', author: 'Tolkien'},
    {title: 'Dracula', author: 'Bran Stocker'},
  );

  search_value: string = '';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getIdParams();

    this.foo$.pipe(
      distinctUntilChanged()
    ).subscribe(data => console.warn( '[foo : distinctUntilChanged]', data))

    this.foo$.pipe(distinct()
    ).subscribe(data => console.warn( '[foo : distinct]', data))

    this.books$.pipe(
      pluck('author'),
      distinct(),
      toArray()
    ).subscribe({
      next: data => console.log('[books : ]',data),
      complete: () => console.log('[book] fin')
    })


    /**********************************************/
    let isLoading = true;

    this.data$
      .pipe(
        tap(data => console.log('[tap] ', data) ), // lire la donnée,
        map(data => data * 10),
        map(data => data * 10),
        tap(data => console.log('[tap after map]', data)),
        filter(data => data % 2000 === 0 ),
        take(1),
        catchError(err => { // solution 1 : gère l'affichage dans le subscribe
          // gérer le message pour user
          throw new Error('Message User friendly')
        }),
     /*   catchError(err => { // Solution 2 : gère l'affichage, on retourne un observable.
          alert('Oups');
          return of(); // créé un observable vide
          // -> Dans le subscribe, on récupère la valeur retournée dans le next
          // Puis l'observable se termine proprement en passant dans le complete
        }) */
        finalize(() => isLoading = false)
      )
      .subscribe({
        next: data => console.log('---- [next]', data),
        error: err => {
          console.error(err)
          isLoading = false;
        },
        complete: () => {
          console.info('Terminé');
          isLoading = false;
        }
      })
  }

  methodDuService(): Observable<number> {
    return this.data$.pipe(
      tap(data => console.log(data) )// enregistrer la valeur dans le Behaviour Subject)
      // ...
    )
  }

  coteComposant() {
    this.methodDuService().subscribe()
  }


  search() {
    this.search_value = this.input.nativeElement.value;
    this.requests++;
  }


  ngAfterViewInit() {
    // TODO retirer le Any
    this.eventSubscription = fromEvent<any>(this.input.nativeElement, 'input')
      .pipe(
        map(event => event.target.value),
        map(value => value.trim()),
        debounceTime(1000),
        distinctUntilChanged(),
        filter(value => value),
        tap(() => this.search())
      ).subscribe()
  }

   ngOnDestroy() {
    if(this.eventSubscription) {
      this.eventSubscription.unsubscribe();
    }
   }


   getIdParams() {
     console.log('Route : ', this.route);
     /*
     Méthode à éviter :
     this.route.paramMap.subscribe({
       next: params => {
           console.log('------ ID : ', params.get('id'))
           this.getByIdService(Number(params.get('id')))
             .subscribe({
               next: message => console.log(message),
               complete: () => console.warn('get by id terminé')
             })
          },
       complete: () => console.warn('Param terminé')
     });
*/

     this.route.paramMap.pipe(
       map(params => Number(params.get('id'))),
       switchMap(id => this.getByIdService(id)), // coupe l'observable précédent
       tap(data => console.warn('---------', data))
     ).subscribe(data => console.error('Subscribe : ', data))


     /* Query strings */
     this.route.queryParams.pipe(
       filter(params => params.vue)
     ).subscribe(params => console.log('------------------ string params : ', params.vue))
   }

   getByIdService(id: Number): Observable<string> {
    return of('coucou');
   }

}
