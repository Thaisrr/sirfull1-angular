import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  api = environment.api;
  storage_name = 'token';
  #isLogged = false;
  #token? : string;

  constructor(private http: HttpClient) {
    const tk = localStorage.getItem(this.storage_name);
    if(tk) {
      this.#isLogged = true;
      this.#token = tk;
    }
  }

  login(credentials: {email: string, password: string}, stayLogged: boolean = false): Observable<boolean> {
    return this.http.post<{token: string}>(`${this.api}login`, credentials).pipe(
      tap(({token}) => this.saveUser(token, stayLogged)),
      map(() => true),
      catchError(err => {
        alert('Erreur d\'authentification');
        return of(false)
      })
    )
  }

  saveUser(token: string, stayLogged: boolean) {
    if(stayLogged) {
      localStorage.setItem(this.storage_name, token);
    } else {
      sessionStorage.setItem(this.storage_name, token)
    }
    this.#token = token;
    this.#isLogged = true;
  }

  logout() {
    this.#isLogged = false;
    localStorage.clear();
    sessionStorage.clear();
  }

  get token() {
    return this.#token;
  }

  get isLogged() {
    return this.#isLogged;
  }



}
