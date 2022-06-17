import {AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ContextService} from "../service/context.service";

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit, OnChanges, AfterViewInit, DoCheck {
  msg = 'Message A';

  constructor(private ctx : ContextService) {}

  setContext() {
    this.ctx.setContext('Coucou ' + new Date())
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('[Parent A] - Change')
  }
  ngOnInit(): void {
    console.log('[Parent A] - Init')
  }
  ngAfterViewInit(): void {
    //this.parent.msg = 'Updated'
    console.log('[Parent A] - AfterView Init')

  }

  ngDoCheck(): void {
    console.log('[Parent A] - Do Check')
  }

}
