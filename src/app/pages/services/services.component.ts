import { Component, OnInit } from '@angular/core';
import {ExempleService} from "../../utils/services/exemple.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  newMessage = '';
  products = ['Furby', 'Barbie', 'Carte Pokemon'];



  constructor(public exempleService: ExempleService) { }

  modifyMessage() {
    if(this.newMessage) {
      this.exempleService.modifyMessage(this.newMessage);
    }
  }

  addBasket(product: string) {
    this.exempleService.addToBasket(product);
  }




}
