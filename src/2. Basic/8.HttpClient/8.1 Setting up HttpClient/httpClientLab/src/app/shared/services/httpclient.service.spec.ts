/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpclientService } from './httpclient.service';

describe('Service: Httpclient', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpclientService]
    });
  });

  it('should ...', inject([HttpclientService], (service: HttpclientService) => {
    expect(service).toBeTruthy();
  }));
});
