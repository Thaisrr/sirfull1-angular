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
import { ObservablesComponent } from './pages/observables/observables.component';
import { RequetesComponent } from './pages/requetes/requetes.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { OperatorsComponent } from './pages/operators/operators.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { LoginComponent } from './pages/login/login.component';
import { SecretComponent } from './pages/secret/secret.component';
import {JWTInterceptor} from "./utils/interceptors/jwt.interceptor";
import { AdminModule } from './admin/admin.module';


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
    ServicesComponent,
    ObservablesComponent,
    RequetesComponent,
    OperatorsComponent,
    SubjectComponent,
    LoginComponent,
    SecretComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
