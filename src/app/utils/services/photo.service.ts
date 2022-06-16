import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Photo} from "../classe/Photo";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  api_url = 'https://jsonplaceholder.typicode.com/photos'

  constructor(private http: HttpClient) { }

  getAllByAlbum(albumId = 1): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.api_url, {
      /*params: {
        albumId,
        param2: 'value2'
      }*/
      params: new HttpParams()
        .set('albumId', albumId) // créér ou remplacer
        .append('param2', 'value2') // ajouter une valeur
        .appendAll({param3: 'value3', param4: 'value4'})
    });
    /* Méthodes de httpParams:
    - get(param2)
    - getAll() -> retourn l'objet de params
    - delete(param3)
    - has('param5') : boolean
     */
  }

  // Idem pour post put et patch
  create(picture: Photo): Observable<Photo> {
    return this.http.post<Photo>(this.api_url, picture, {
      params: {},
      headers: {}
    })
  }

  delete(id: number) {
    return this.http.delete(`${this.api_url}/${id}`, {})
  }



}
