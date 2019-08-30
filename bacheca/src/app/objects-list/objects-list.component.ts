import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-objects-list',
  templateUrl: './objects-list.component.html',
  styleUrls: ['./objects-list.component.css']
})
export class ObjectsListComponent implements OnInit {

  constructor() { }

  @Input() oggetti;
  ngOnInit() {
  }
}
