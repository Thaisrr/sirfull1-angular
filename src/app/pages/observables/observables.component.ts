import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Subscription, throwError} from "rxjs";
import {ExempleService} from "../../utils/services/exemple.service";

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit, OnDestroy{

  data$ = new Observable(observer => {
    observer.next(1);
    observer.next(2);
    observer.error(new Error('Nope'));
    observer.next(3);

    observer.complete();
  });

  promise = new Promise((res) => {
    res(1);
  });

  interval$ = interval(1000);
  subscription: Subscription;

  constructor() {
    console.log('Constructor')
    this.promise
      .then(data => console.log('[Promise] Data : ', data))
      .catch(err => console.error(err));


    this.subscription = this.interval$.subscribe({
      next: data => console.log('[Interval] ', data),
      complete: () => console.log('Interval is complete'), // On ne passe jamais dedans
    });

    this.data$.subscribe({
      next: data => console.log('[Observable]', data),
      complete: () => console.info('Data is complete'),
      error: err => console.warn(err)
    });

  }

  ngOnInit() {
    console.log('Initialisation du composant ');
    // Ici pour les appels des requêtes
  }

  unsubscribe() {
    this.subscription.unsubscribe();
  }

  ngOnDestroy() {
    console.log('Destructions du composant');
    // Ici, on coupe les flux
    this.subscription.unsubscribe();
  }

}
