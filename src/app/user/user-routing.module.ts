import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import {UserResolverService} from "../utils/services/user-resolver.service";

const routes: Routes = [{ path: '', component: UserComponent, resolve: {users: UserResolverService}}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
