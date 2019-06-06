import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuncioComponent } from './annuncio.component';

describe('AnnuncioComponent', () => {
  let component: AnnuncioComponent;
  let fixture: ComponentFixture<AnnuncioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnuncioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
