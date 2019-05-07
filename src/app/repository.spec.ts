import {Repository } from './github-repos';

describe('Repository', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  it('should create an instance', () => {
    expect(new Repository()).toBeTruthy();
  });
});
