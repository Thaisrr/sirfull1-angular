import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifecycleRoutingModule } from './lifecycle-routing.module';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';


@NgModule({
  declarations: [
    AComponent,
    BComponent,
    CComponent
  ],
  imports: [
    CommonModule,
    LifecycleRoutingModule
  ]
})
export class LifecycleModule { }
