import { Component, OnInit } from '@angular/core';
import {IsReady} from "../../utils/classe/IsReady";

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit, IsReady {
  isFinished = false;

  constructor() { }

  ngOnInit(): void {
  }

  isReady(): boolean {
    return this.isFinished
  }

  finish() {
    this.isFinished = true;
  }

}
