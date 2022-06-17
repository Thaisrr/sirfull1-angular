import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import {SharedService} from "./shared.service";



@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    // HttpClient ? FormsModule (ngModel), ReactiveModule
    // Export des modules communs
    CommonModule
  ]
})
export class SharedModule { }
