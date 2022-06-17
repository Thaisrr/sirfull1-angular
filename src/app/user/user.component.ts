import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import User from "../utils/classe/User";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users?: any[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      console.log(data);
      this.users = data['users'];
    })
  }

}
