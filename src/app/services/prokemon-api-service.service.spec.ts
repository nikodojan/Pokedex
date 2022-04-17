import { TestBed } from '@angular/core/testing';

import { ProkemonApiServiceService } from './prokemon-api-service.service';

describe('ProkemonApiServiceService', () => {
  let service: ProkemonApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProkemonApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
