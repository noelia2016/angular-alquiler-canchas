import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplejoCanchasComponent } from './complejo-canchas.component';

describe('ComplejoCanchasComponent', () => {
  let component: ComplejoCanchasComponent;
  let fixture: ComponentFixture<ComplejoCanchasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplejoCanchasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplejoCanchasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
