import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import User from "../classe/User";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<User[]>{

  constructor(private http: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> {
     const api = 'https://swapi.dev/api/people';
     console.log('-------------- In resolver')

     return this.http.get<any>(api)
       .pipe(map(res => res.results))

  }


}
