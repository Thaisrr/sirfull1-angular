import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PhotoService} from "../../utils/services/photo.service";
import {Photo} from "../../utils/classe/Photo";

@Component({
  selector: 'app-requetes',
  templateUrl: './requetes.component.html',
  styleUrls: ['./requetes.component.css']
})
export class RequetesComponent implements OnInit {
  joke_obj?: {joke: string};
  api = 'https://v2.jokeapi.dev/joke/Programming?&type=single&safe-mode';
  isLoading = true;
  pictures?: Photo[];

  constructor(private http: HttpClient, private photoService: PhotoService) { }

  ngOnInit(): void {
    this.getData();
    this.getPictures();
  }

  getPictures()  {
    this.photoService.getAllByAlbum()
      .subscribe(photos => {
        this.pictures = photos
      })
  }

  getData() {
    this.isLoading = true;
      this.http.get<{joke: string}>(this.api)
        .subscribe({
          next: data => this.joke_obj = data,
          error: err => {
            alert(`Oups: quelque chose s'est mal passé 😢`);
            this.isLoading = false;
          },
          complete: () => this.isLoading = false
        });
  }

}
