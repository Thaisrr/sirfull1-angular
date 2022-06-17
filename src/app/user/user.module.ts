import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import {Page1Component} from "../test/page1/page1.component";
import {TestModule} from "../test/test.module";


@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    TestModule
  ]
})
export class UserModule { }
