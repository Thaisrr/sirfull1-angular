import {Component, NgIterable, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User2} from "../../utils/classe/User2";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent  {

  favorite_book_control = new FormControl('', [Validators.required, Validators.minLength(3)]);
  favorite = '';

  user_form = new FormGroup({
    name: new FormControl(),
    email: new FormControl('', [Validators.required]),
    address: new FormGroup({
      number: new FormControl(),
      street: new FormControl(),
      city: new FormControl()
    })
  });

  formation_form = this.fb.group({
    title: ['Titre par défaut', [Validators.required]],
    description: [''],
    participants: this.fb.array([
      this.fb.control('')
    ]),
    formateurs: this.fb.array([
      this.fb.group({
        firstname: [''],
        lastname: ['']
      })
    ])
  })

  get formateurs() {
    return this.formation_form.get('formateurs') as FormArray;
  }

  addFormateur() {
    const formateurs_array = this.formation_form.get('formateurs') as FormArray;
    formateurs_array.push(
      this.fb.group({
        firstname: [''],
        lastname: ['']
      })
    )
  }


  get participants() {
    return this.formation_form.get('participants') as FormArray;
  }

  addParticipant() {
    let array = this.formation_form.get('participants') as FormArray;
    array.push(this.fb.control(''))
  }

  truc_control = this.fb.control('', [Validators.required]);

  formation2_form = new FormGroup({
    title: new FormControl(''),
    participants: new FormArray([
      new FormControl('')
    ])
  })


  constructor(private fb: FormBuilder) {}

  saveFormation() {
    console.log(this.formation_form.value)
  }

  submitFavorite() {
    console.log( 'Valid ? ', this.favorite_book_control.valid );
    console.log( 'Invalid ? ', this.favorite_book_control.invalid);
    console.log('Has required error ?', this.favorite_book_control.hasError('required'));
    this.favorite = this.favorite_book_control.value || '';
  }

  submitUser() {
    this.user_form.controls['name']
      .setValue(this.user_form.controls['name'].value.toUpperCase())
    if(this.user_form.valid) {
      console.log(this.user_form.value);
      const user: User2 = this.user_form.value;
      this.user_form.reset();
    }
  }

  updateUser() {
    this.user_form.setValue({
      name: 'Jane Doe',
      email: 'jdoe@mail.fr',
      address: {
        number: 3,
        street: 'rue des Lilas',
        city: 'Lille'
      }
    })
  }

}
