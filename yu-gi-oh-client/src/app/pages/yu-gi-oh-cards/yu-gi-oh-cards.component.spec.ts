import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YuGiOhCardsComponent } from './yu-gi-oh-cards.component';

describe('YuGiOhCardsComponent', () => {
  let component: YuGiOhCardsComponent;
  let fixture: ComponentFixture<YuGiOhCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YuGiOhCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YuGiOhCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
