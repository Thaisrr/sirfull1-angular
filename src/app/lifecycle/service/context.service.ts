import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContextService {
  context = new Subject<{value: string}>();

  constructor() { }

  setContext(value: string) {
    this.context.next({value})
  }


}
