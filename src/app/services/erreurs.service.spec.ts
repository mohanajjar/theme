import { TestBed, inject } from '@angular/core/testing';

import { ErreursService } from './erreurs.service';

describe('ErreursService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErreursService]
    });
  });

  it('should be created', inject([ErreursService], (service: ErreursService) => {
    expect(service).toBeTruthy();
  }));
});
