import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {SecretComponent} from "../../pages/secret/secret.component";
import {PresentationComponent} from "../../pages/presentation/presentation.component";
import {IsReady} from "../classe/IsReady";

@Injectable({
  providedIn: 'root'
})
export class IsReadyToGoGuard implements CanDeactivate<IsReady> {
  canDeactivate(
    component: SecretComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean {

    if(!component.isReady()) {
      return confirm('Êtes-vous sur de vouloir quitter cette page ? ')
    }
    return true;
  }

}
