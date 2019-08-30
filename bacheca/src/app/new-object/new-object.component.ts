import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Object } from "../objects";
import { Oggetti } from '../mock-objects';

@Component({
  selector: 'app-new-object',
  templateUrl: './new-object.component.html',
  styleUrls: ['./new-object.component.css']
})
export class NewObjectComponent implements OnInit {

  @Input() username;
  oggettoForm: FormGroup;
  oggetti = Oggetti;

  constructor(fb: FormBuilder) {
    this.oggettoForm = fb.group({
    'nome': ['nome', Validators.required],
    'tipo': ['tipo', Validators.required],
    'descrizione': ['descrizione', Validators.required]});
  }

  ngOnInit() {
  }

  aggiungiOggetto(): boolean {

    if(this.oggettoForm.valid){
        let oggetto: Object = new Object();
        oggetto.nome = this.oggettoForm.controls['nome'].value;
        oggetto.tipo = this.oggettoForm.controls['tipo'].value;
        oggetto.descrizione = this.oggettoForm.controls['descrizione'].value;
        this.oggetti.push(oggetto);

    return false;
    }
  }
}
