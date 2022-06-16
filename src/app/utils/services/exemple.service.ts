import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExempleService {
  message = 'Bonjour le monde';
  panier: string[] = [];
  panier$ =  new Subject<string[]>();
  storage_name = 'panier';

  constructor() {
    this.getFromStorage()
  }

  modifyMessage(value: string) {
    this.message = value;
  }

  addToBasket(item: string) {
    // Panier 1
    this.panier.push(item);
    this.updateStorate();

    // Panier subject
    this.panier$.next(this.panier);
  }

  removeFromBasket(el: number) {
   this.panier.splice(el, 1);
   this.updateStorate();
  }

  getFromStorage() {
    const stored_data = localStorage.getItem(this.storage_name);
    if(stored_data) {
      this.panier = JSON.parse(stored_data);
    }
  }

  updateStorate() {
    localStorage.setItem(this.storage_name, JSON.stringify(this.panier));
  }

}
