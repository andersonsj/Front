import { TestBed } from '@angular/core/testing';

import { UrlproviderService } from './urlprovider.service';

describe('UrlproviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrlproviderService = TestBed.get(UrlproviderService);
    expect(service).toBeTruthy();
  });
});
