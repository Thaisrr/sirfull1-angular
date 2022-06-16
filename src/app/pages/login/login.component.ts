import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../utils/services/authentication.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credential_form: FormGroup;
  stayLogged: FormControl;

  constructor(private authService: AuthenticationService) {
    this.credential_form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
    this.stayLogged = new FormControl(false);

  }

  ngOnInit(): void {
  }

  login() {
    if(this.credential_form.valid) {
      this.authService.login(
        this.credential_form.value,
        this.stayLogged.value)
        .subscribe(logged => {
          if(logged) {
            alert('Bienvenue');
            this.credential_form.reset();
          }
        })
    }
  }


}
