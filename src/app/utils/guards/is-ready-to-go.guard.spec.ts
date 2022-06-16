import { TestBed } from '@angular/core/testing';

import { IsReadyToGoGuard } from './is-ready-to-go.guard';

describe('IsReadyToGoGuard', () => {
  let guard: IsReadyToGoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsReadyToGoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
