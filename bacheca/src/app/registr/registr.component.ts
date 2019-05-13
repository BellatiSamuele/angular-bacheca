import { Component, OnInit } from '@angular/core';
import {
 FormBuilder,
 FormGroup,
 Validators,
} from '@angular/forms';

@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.css']
})
export class RegistrComponent implements OnInit {

myForm: FormGroup;
 constructor(fb: FormBuilder) {
   this.myForm = fb.group({
     'sku': ['ABC123', Validators.required],
     'price': ['123', Validators.required],
     'url': ['https://', Validators.required],
     'nome': ['Nome', Validators.required]
   });
 }
 ngOnInit() {
 }

 onSubmit(value: string): void {
   console.log('valori inseriti: ', value);
 }

}
