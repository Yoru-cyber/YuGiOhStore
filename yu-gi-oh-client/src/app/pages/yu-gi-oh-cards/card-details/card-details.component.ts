import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import YuGiOhCard from '../../../models/YuGiOhCard';
import { YuGiOhCardsService } from '../../../services/yu-gi-oh-cards.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css',
})
export class CardDetailsComponent {
  constructor(
    private route: ActivatedRoute,
    private YuGiOhCardsService: YuGiOhCardsService
  ) {}
  card$!: Observable<YuGiOhCard>;
  selectedId!: string | null;
  ngOnInit() {
    this.selectedId = this.route.snapshot.paramMap.get('id');
    if (this.selectedId){
       this.card$ = this.YuGiOhCardsService.getByID(parseInt(this.selectedId));
    }
    else{
      console.log("error retrieving object")
    }
  }
}
