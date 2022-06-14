import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaires',
  templateUrl: './formulaires.component.html',
  styleUrls: ['./formulaires.component.css']
})
export class FormulairesComponent  {



  search_str = "";
  user = {name: '', email: ''}
  email_error = false;

  mavaleur = '';

  modifyValue() {
    const input = document.querySelector('#value') as any;
    this.mavaleur = input.value;
  }

  submitSearch() {
    if(this.search_str) {
      alert('Recherche lancée : ' + this.search_str);
    }
  }

  checkEmail() {
    if(!this.user.email) {
      this.email_error = true;
    }
  }


  login()  {
    if(!this.email_error)
      console.log('Soumission du formulaire', this.user)
  }



}
