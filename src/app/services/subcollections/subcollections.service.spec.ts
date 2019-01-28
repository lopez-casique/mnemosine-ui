import { TestBed } from '@angular/core/testing';

import { SubcollectionsService } from './subcollections.service';

describe('SubcollectionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubcollectionsService = TestBed.get(SubcollectionsService);
    expect(service).toBeTruthy();
  });
});
