import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PresentationComponent} from "./pages/presentation/presentation.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {CommunicationComponent} from "./pages/communication/communication.component";

const routes: Routes = [
  {path: 'presentation', component: PresentationComponent},
  {path: 'communication', component: CommunicationComponent},
  {path: '', redirectTo: 'presentation', pathMatch: 'full'},
  {path: 'accueil', redirectTo: 'presentation'},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '404'},
  // OU : {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
