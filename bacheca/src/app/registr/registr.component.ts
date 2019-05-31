import { Component, OnInit } from '@angular/core';
import {
 FormBuilder,
 FormGroup,
 Validators,
} from '@angular/forms';
import { Utente } from '../utente';
import { Users } from '../mock-utente';

@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.css']
})
export class RegistrComponent implements OnInit {
utenti = Users;
signup: FormGroup;
hide: boolean;
 constructor(fb: FormBuilder) {
   this.signup = fb.group({
     'nome': ['ABC', Validators.required],
     'cognome': ['ABC', Validators.required],
     'username': ['ABC', Validators.required],
     'email': ['ABC@ABC', Validators.required],
     'password': ['ABC123!"£', Validators.required]
   });
 }

 ngOnInit() {
 }

 onSubmit(value: string): boolean {
   console.log('valori inseriti: ', value);

      let utente : Utente = new Utente();
      utente.nome = this.signup.controls['nome'].value;
      utente.cognome = this.signup.controls['cognome'].value;
      utente.username = this.signup.controls['username'].value;
      utente.password = this.signup.controls['password'].value;
      utente.email = this.signup.controls['email'].value;

      this.utenti.push(utente);

    return false;
 }

     df(){
      if(!this.hide){
        this.hide = true;
        document.getElementById("btnLogin").innerHTML = "Registrazione";
      } else {
        this.hide = false;
        document.getElementById("btnLogin").innerHTML = "Login";
      }
    }
}
