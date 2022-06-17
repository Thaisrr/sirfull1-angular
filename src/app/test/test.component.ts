import { Component, OnInit } from '@angular/core';
import {TestService} from "./services/test.service";
import {SharedService} from "../shared/shared.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(public testService: TestService, public sharedService: SharedService) { }

  ngOnInit(): void {
  }

  sayHello() {
    this.testService.sayHello()
  }

  sharedHello() {
    this.sharedService.sharedHello();
  }

}
