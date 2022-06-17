import {AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AComponent} from "../a/a.component";

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnChanges, OnInit, DoCheck, AfterViewInit {
  @Input() msg?: string;

  theTitle?: string;

  constructor() {}
  changeResult(title: string): void {
    // setTimeout(() => {
    this.theTitle = title;
    // }, 100);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('[Enfant B] - Change')
  }

  ngOnInit(): void {
    console.log('[Enfant B] - Init')
  }

  ngAfterViewInit(): void {
    //this.parent.msg = 'Updated'
    console.log('[Enfant B] - AfterView Init')
  }

  ngDoCheck(): void {
    console.log('[Enfant B] - Do Check')
  }





}
