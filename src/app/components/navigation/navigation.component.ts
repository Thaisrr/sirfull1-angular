import { Component, OnInit } from '@angular/core';
import {ExempleService} from "../../utils/services/exemple.service";
import {AuthenticationService} from "../../utils/services/authentication.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public exempleService: ExempleService, public authService: AuthenticationService) { }

  ngOnInit(): void {
  }

}
