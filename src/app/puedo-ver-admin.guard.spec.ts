import { TestBed } from '@angular/core/testing';

import { PuedoVerAdminGuard } from './puedo-ver-admin.guard';

describe('PuedoVerAdminGuard', () => {
  let guard: PuedoVerAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PuedoVerAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
