import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class CommunicationComponent {

  parent_counter = 10;
  total = 110;

  incrementTotal() {
    this.total++;
  }

  handleModification(event: number) {
    console.log('Enfant is now : ', event);
  }

}
