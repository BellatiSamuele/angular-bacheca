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
  prodottoForm: FormGroup;
  posts = Posts;

  constructor(fb: FormBuilder) {
    this.prodottoForm = fb.group({
      'nome': ['dagli un nome', Validators.required],
      'tipo': ['scegli il tipo', Validators.required],
      'prezzo': ['00', Validators.required],
      'descrizione': ['descrivi', Validators.required]});
  }

  ngOnInit() {
  }

  aggiungiProdotto(): boolean {

    if(this.prodottoForm.valid){
      if(this.username != null){
        let post: Post = new Post();
        post.nome = this.prodottoForm.controls['nome'].value;
        post.tipo = this.prodottoForm.controls['tipo'].value;
        post.prezzo = Number(this.prodottoForm.controls['prezzo'].value);
        post.descrizione = this.prodottoForm.controls['descrizione'].value;
        post.username = this.username;
        let date: Date = new Date();
        post.data = date.getHours() + ':' + date.getMinutes() + ' - ' + date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear();
        this.posts.push(post);

        return false;
      }
    }
  }
}
