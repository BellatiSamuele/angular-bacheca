import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RegistrComponent } from './registr/registr.component';
import {
 FormsModule,
 ReactiveFormsModule
} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AnnuncioComponent } from './annuncio/annuncio.component';
import { NewObjectComponent } from './new-object/new-object.component';
import { ObjectsListComponent } from './objects-list/objects-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrComponent,
    LoginComponent,
    AnnuncioComponent,
    NewObjectComponent,
    ObjectsListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
