import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanchaAboutComponent } from './cancha-about.component';

describe('CanchaAboutComponent', () => {
  let component: CanchaAboutComponent;
  let fixture: ComponentFixture<CanchaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanchaAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanchaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
