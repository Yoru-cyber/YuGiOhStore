import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import YuGiOhCard from '../models/YuGiOhCard';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class YuGiOhCardsService {
  private httpClient: HttpClient;
  cards: YuGiOhCard[] = [];
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
  getAll(): Observable<YuGiOhCard[]> {
    return this.httpClient.get<YuGiOhCard[]>(
      'http://localhost:3000/v1/YuGiOhCards/'
    );
  }
  getByID(id: number): Observable<YuGiOhCard>{
        return this.httpClient.get<YuGiOhCard>(`http://localhost:3000/v1/YuGiOhCards/${id}`);
  }
}
