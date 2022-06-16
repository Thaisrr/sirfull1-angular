import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from "../services/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class IsNotLoggedGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('Route: ', route);
    console.log('Router', state);
    const isLogged = this.authService.isLogged;
    if(!isLogged) {
      alert('Vous devez être connecté');
      this.router.navigate(['/login'], {queryParams: {url: state.url}})
        .then(() => console.log("Navigation terminée") )
    }
    return isLogged;
  }

}
