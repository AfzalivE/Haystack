import { TestBed, inject } from '@angular/core/testing';

import { PagefetchService } from './pagefetch.service';

describe('PagefetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PagefetchService]
    });
  });

  it('should be created', inject([PagefetchService], (service: PagefetchService) => {
    expect(service).toBeTruthy();
  }));
});
