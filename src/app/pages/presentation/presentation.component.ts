import { Component, OnInit } from '@angular/core';
import User from "../../utils/classe/User";
import {Car} from "../../utils/classe/Car";
import {ExempleService} from "../../utils/services/exemple.service";

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent {

  message = 'Hello World'; // string
  nom1 = '';
  nom2: string | undefined;
  nom3!: string;
  nom4?: string; // optionnel, peut être undefined

  today = new Date();
  PI = Math.PI;

  // number, string, boolean, Object, type[]  string[], ...
  // classes
  user?: User;

  car: Car = {model: 'Clio', marque: 'Renaut'}

  showSecret = false;

  fruits = [
    {name: 'Pomme', price: 3},
    {name: 'Poire', price: 3},
    {name: 'Abricot', price: 3},
    {name: 'Pommef', price: 3},
    {name: 'Pomme', price: 3}
  ]



  image = {id: 123, source: '', alt: 'Text alternatif'};

  param = 'P';



  constructor(public exempleService: ExempleService) {
    //  this.nom = 'Toto';
  }

  toggleSecret() {
    this.showSecret = !this.showSecret;
  }

  sayHello(): void {
    console.log('Bonjour le monde');
    console.log(this.nom1);
  }

  handleHover(): void {
    console.warn('Over');
  }

  handleClickParent(): void {
    console.debug('Click parent')
  }

  handleClickEnfant(event: Event ): void {
    event.stopPropagation();
    console.info('Click Enfant');
  }

  sum(a: number, b: number): number {
    return a + b;
  }

  sum2 = function (a: number, b: number): number {
    return a + b;
  }

  sum3 = (a: number, b: number): number => a + b;

  getAnswer(answer : 'OUI' | 'NON') {

  }

  pushArray() {
    this.fruits.push({name: 'Un fruit', price: 2})
  }

  changeParam() {
    this.param = 'f';
  }

  filterFruits() {
    console.log('In filter fruits');
    return this.fruits.filter(f => f.name.includes(this.param))
  }



}
