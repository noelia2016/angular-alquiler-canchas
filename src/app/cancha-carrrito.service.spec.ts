import { TestBed } from '@angular/core/testing';

import { CanchaCarrritoService } from './cancha-carrrito.service';

describe('CanchaCarrritoService', () => {
  let service: CanchaCarrritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanchaCarrritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
