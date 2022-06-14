import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RainbowPipe } from './utils/pipes/rainbow.pipe';
import { ArrayFilterPipe } from './utils/pipes/array-filter.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PresentationComponent } from './pages/presentation/presentation.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CommunicationComponent } from './pages/communication/communication.component';
import { EnfantComponent } from './components/enfant/enfant.component';
import { FormulairesComponent } from './pages/formulaires/formulaires.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';
import { ServicesComponent } from './pages/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    RainbowPipe,
    ArrayFilterPipe,
    PresentationComponent,
    NavigationComponent,
    PageNotFoundComponent,
    CommunicationComponent,
    EnfantComponent,
    FormulairesComponent,
    ReactiveFormComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
