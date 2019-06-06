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
nomeUtenteOnline: String = null;
cognomeUtenteOnline: String = null;
username: String = null;
logoutEffettuato: boolean;
 constructor(fb: FormBuilder) {
   this.signin = fb.group({
     'username': ['ABC', Validators.required],
     'password': ['ABC123!"£', Validators.required]
   });
 }

  ngOnInit() {
  }

 onSubmit(value: String): boolean {
   console.log('valori inseriti: ', value);

      let utente : Utente = new Utente();
      utente.username = this.signin.controls['username'].value;
      utente.password = this.signin.controls['password'].value;

      if(this.signin.valid){
        let trovato = false;
        for(let i of this.utenti){
          if(this.signin.controls['username'].value == i.username){
            if(this.signin.controls['password'].value == i.password){
              trovato = true;
              this.cognomeUtenteOnline = i.cognome;
              this.nomeUtenteOnline = i.nome;
              this.username = i.username;
              this.logoutEffettuato = false;
              console.log("effettuato");
              break;
            }
          }
        }
      }

    return false;
 }

}
