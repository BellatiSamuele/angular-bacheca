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
myForm: FormGroup;
 constructor(fb: FormBuilder) {
   this.myForm = fb.group({
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
      utente.nome = this.myForm.controls['nome'].value;
      utente.cognome = this.myForm.controls['cognome'].value;
      utente.username = this.myForm.controls['username'].value;
      utente.password = this.myForm.controls['password'].value;
      utente.email = this.myForm.controls['email'].value;

      this.utenti.push(utente);

    return false;
 }
}
