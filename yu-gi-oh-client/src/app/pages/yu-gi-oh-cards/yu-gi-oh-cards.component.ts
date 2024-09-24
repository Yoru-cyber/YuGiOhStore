import { Component } from '@angular/core';
import { YuGiOhCardsService } from '../../services/yu-gi-oh-cards.service';
import YuGiOhCard from '../../models/YuGiOhCard';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-yu-gi-oh-cards',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './yu-gi-oh-cards.component.html',
  styleUrl: './yu-gi-oh-cards.component.css',
})
export class YuGiOhCardsComponent {
  cards$!: Observable<YuGiOhCard[]>;
  private _YuGiOhCardsService: YuGiOhCardsService;
  constructor(YuGiOhCardsService: YuGiOhCardsService) {
    this._YuGiOhCardsService = YuGiOhCardsService;
  }
  ngOnInit(): void {
    // console.log(this._YuGiOhCardsService.getAll());
    this.cards$ = this._YuGiOhCardsService.getAll();
    // console.log(this.cards$);
  }
}
