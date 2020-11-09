import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanchaContactComponent } from './cancha-contact.component';

describe('CanchaContactComponent', () => {
  let component: CanchaContactComponent;
  let fixture: ComponentFixture<CanchaContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanchaContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanchaContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
