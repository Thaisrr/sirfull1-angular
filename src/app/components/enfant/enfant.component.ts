import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent {

  @Input() counter : number = 0; // Optionnel
  @Input('counter_name') title?: string;

  @Output() increment_event = new EventEmitter();
  @Output() modify_event = new EventEmitter<number>()

  increment() {
    this.counter++;
    this.increment_event.emit();
    this.modify_event.emit(this.counter);
  }

}
