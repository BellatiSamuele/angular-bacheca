import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';
import { Utente } from './utente';
import { Users } from './mock-utente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bacheca';
  utenti = Users;
}


