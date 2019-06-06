import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from "../annuncio";
import { Posts } from '../mock-annuncio';

@Component({
  selector: 'app-annuncio',
  templateUrl: './annuncio.component.html',
  styleUrls: ['./annuncio.component.css']
})
export class AnnuncioComponent implements OnInit {

  @Input() nomeUtenteOnline;
  @Input() cognomeUtenteOnline;
  @Input() username;
  oggettoForm: FormGroup;
  posts = Posts;

  constructor(fb: FormBuilder) {
    this.oggettoForm = fb.group({'nome': ['nome', Validators.required], 'tipo': ['tipo', Validators.required], 'prezzo': ['0', Validators.required], 'descrizione': ['descrizione', Validators.required]});
  }

  ngOnInit() {
  }

  aggiungiOggetto(): boolean {

    if(this.oggettoForm.valid){
      if(this.username != null){
        let post: Post = new Post();
        post.nome = this.oggettoForm.controls['nome'].value;
        post.tipo = this.oggettoForm.controls['tipo'].value;
        post.prezzo = Number(this.oggettoForm.controls['prezzo'].value);
        post.descrizione = this.oggettoForm.controls['descrizione'].value;
        post.username = this.username;
        let date: Date = new Date();
        post.data = date.getHours() + ':' + date.getMinutes() + ', il ' + date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear();
        this.posts.push(post);
        document.getElementById("loginPerOggetti").style.display = "none";
        } else {
          document.getElementById("loginPerOggetti").style.display = "block";
        }
          } else {
              console.log("Il form non è valido");
          }

        return false;
      }
   }
