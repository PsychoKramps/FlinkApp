import { TestBed } from '@angular/core/testing';

import { ScriptsJsService } from './scripts-js.service';

describe('ScriptsJsService', () => {
  let service: ScriptsJsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScriptsJsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
