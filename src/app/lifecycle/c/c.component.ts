import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ContextService} from "../service/context.service";


@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit {

  @Output() titleChanged = new EventEmitter<string>();

  readonly titles: string[] = [
    'Page 1, sans plus',
    'La belle page 2',
    'La trop rarement lue page 3',
  ];
  currentPage?: number;

  constructor(private ctx: ContextService) {
  }
  ngOnInit() {
    this.ctx.context.subscribe(({value}) => this.setPage(2))
  }

  /*
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['context']?.currentValue) {
      // some obscure conditions here...
      if (this.context?.value || '' > '123456123') {
        // setTimeout(() => {
        this.setPage(2);
        // }, 100);
      } else this.setPage(1);
    }
  } */



  setPage(value: number): void {
    this.currentPage = value;
    this.titleChanged.emit(this.titles[value - 1]);
  }

}
