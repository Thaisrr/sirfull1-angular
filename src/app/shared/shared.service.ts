import { Injectable } from '@angular/core';
import {SharedModule} from "./shared.module";

@Injectable({
  providedIn: SharedModule
})
export class SharedService {

  constructor() { }

  sharedHello() {
    alert('Hello')
  }
}
