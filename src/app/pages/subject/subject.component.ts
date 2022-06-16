import { Component, OnInit } from '@angular/core';
import {AsyncSubject, BehaviorSubject, Observable, of, ReplaySubject, Subject} from "rxjs";
import {ExempleService} from "../../utils/services/exemple.service";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  local_panier: string[] = [];

  constructor(public exempleService: ExempleService) { }

  ngOnInit(): void {
    this.createSubject();
    this.createBehaviourSubject();
    this.createReplaySubj();
    this.createAsyncSubj();

    this.exempleService.panier$.subscribe(data => {
      this.local_panier = data;
      console.log('Panier modifié : do something...');
    })

  }

  /*
  Subject -> on s'abonne, puis on écoute les valeurs arrivant après l'abonnement,
  BehaviourSubject -> on a une valeur par défaut, on s'abonne pour récupérer cette valeur et les suivantes
  AsyncSubject -> on a des valeurs, on s'abonne pour récupérer la dernière valeur au moment du complete
  ReplaySubject -> on a une ou plusieurs valeurs passées, on s'abonne pour récuperer l'historique des valeurs et les suivantes
  */

  createObs() {
    of(1, 2, 3);
    const myObs$ =  new Observable(observer => {
      observer.next(5)
      observer.next(6)
    })
  }

  createSubject() {
    const sub = new Subject<string>();
    // Récupérer une valeur
    sub.next('coucou');

    // S'abonner
    sub.subscribe(msg => console.log(msg));
    sub.next('Hello');
    sub.next('Hallo');
  }

  createBehaviourSubject() {
    const bs$ = new BehaviorSubject<string>('[BS] : Valeur defaut'); // pas récupérée
    bs$.next('[BS] : modification 1'); // derniere valeur avant souscription -> récupérée

    bs$.subscribe(data => console.log(data));
    bs$.next('[BS] : modification 2');
    bs$.next('[BS] : modification 3');

  }

  createReplaySubj() {
    const replay = new ReplaySubject<string>(5);
    replay.next('[replay] 1');
    replay.next('[replay] 2');
    replay.next('[replay] 3');
    replay.next('[replay] 4');

    replay.subscribe(data => console.log(data));

    replay.next('[replay] 5');
    replay.next('[replay] 6');
    replay.next('[replay] 7');
    replay.next('[replay] 8');
  }


  createAsyncSubj() {
    const async = new AsyncSubject<string>();
    async.next('[async] 1');
    async.next('[async] 2');
    async.subscribe(a => console.log(a));
    async.next('[async] 3');
    async.next('[async] 4');
    async.complete();
  }

  modifyPanier() {
    this.exempleService.addToBasket('t');
  }

}
