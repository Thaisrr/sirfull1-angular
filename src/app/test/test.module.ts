import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import {TestRoutingModule} from "./test-routing.module";
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import {SharedModule} from "../shared/shared.module";
import {TestService} from "./services/test.service";



@NgModule({
  declarations: [
    TestComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    SharedModule,
    TestRoutingModule
  ],
  exports: [
    Page1Component
  ],
  providers: [
    TestService
  ]
})
export class TestModule { }
