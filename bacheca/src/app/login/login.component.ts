import { Component, OnInit } from '@angular/core';
import { Utente } from '../utente';
import { Users } from '../mock-utente';
import {
 FormBuilder,
 FormGroup,
 Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

utenti = Users;
signin: FormGroup;
 constructor(fb: FormBuilder) {
   this.signin = fb.group({
     'username': ['ABC', Validators.required],
     'password': ['ABC123!"£', Validators.required]
   });
 }

  ngOnInit() {
  }

 onSubmit(value: string): boolean {
   console.log('valori inseriti: ', value);

      let utente : Utente = new Utente();
      utente.username = this.signin.controls['username'].value;
      utente.password = this.signin.controls['password'].value;

      this.utenti.push(utente);

    return false;
 }

}
