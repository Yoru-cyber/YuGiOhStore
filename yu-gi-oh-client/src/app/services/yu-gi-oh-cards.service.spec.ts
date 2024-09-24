import { TestBed } from '@angular/core/testing';

import { YuGiOhCardsService } from './yu-gi-oh-cards.service';

describe('YuGiOhCardsService', () => {
  let service: YuGiOhCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YuGiOhCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
