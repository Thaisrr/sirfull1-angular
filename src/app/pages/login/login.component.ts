import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../utils/services/authentication.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credential_form: FormGroup;
  stayLogged: FormControl;
  redirection_url   = '/';

  constructor(private authService: AuthenticationService, private router: Router, private route: ActivatedRoute) {
    this.credential_form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
    this.stayLogged = new FormControl(false);

  }

  ngOnInit(): void {
    const url = this.route.snapshot.queryParamMap.get('url');
    if(url) {
      this.redirection_url = url;
    }
  }

  login() {
    if(this.credential_form.valid) {
      this.authService.login(
        this.credential_form.value,
        this.stayLogged.value)
        .subscribe(logged => {
          if(logged) {
            this.router.navigate([this.redirection_url], {queryParams: {test: 1}})
            this.credential_form.reset();
          }
        })
    }
  }


}
