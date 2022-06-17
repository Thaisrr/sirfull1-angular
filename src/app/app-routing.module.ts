import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {PresentationComponent} from "./pages/presentation/presentation.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {CommunicationComponent} from "./pages/communication/communication.component";
import {FormulairesComponent} from "./pages/formulaires/formulaires.component";
import {ReactiveFormComponent} from "./pages/reactive-form/reactive-form.component";
import {ServicesComponent} from "./pages/services/services.component";
import {ObservablesComponent} from "./pages/observables/observables.component";
import {RequetesComponent} from "./pages/requetes/requetes.component";
import {OperatorsComponent} from "./pages/operators/operators.component";
import {SubjectComponent} from "./pages/subject/subject.component";
import {LoginComponent} from "./pages/login/login.component";
import {SecretComponent} from "./pages/secret/secret.component";
import {IsNotLoggedGuard} from "./utils/guards/is-not-logged.guard";
import {IsReadyToGoGuard} from "./utils/guards/is-ready-to-go.guard";
import {CustomPreloadingStrategyService} from "./utils/services/custom-preloading-strategy.service";

const routes: Routes = [
  {path: 'presentation', component: PresentationComponent},
  {path: 'communication', component: CommunicationComponent},
  {path: 'form', component: FormulairesComponent},
  {path: 'reactive', component: ReactiveFormComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'observables', component: ObservablesComponent},
  {path: 'requetes', component: RequetesComponent},
  {path: 'operators/:id', component: OperatorsComponent},
  {path: 'subjects', component: SubjectComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'secret',
    component: SecretComponent,
    canActivate: [IsNotLoggedGuard],
    canDeactivate: [IsReadyToGoGuard]
  },
  {path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule)},
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    data: {preload: true}
  },
  {path: '', redirectTo: 'presentation', pathMatch: 'full'},
  {path: 'accueil', redirectTo: 'presentation'},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '404'},
  // OU : {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {preloadingStrategy: CustomPreloadingStrategyService, enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
