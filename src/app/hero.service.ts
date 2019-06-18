import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { myMockHeroes } from './mock-heroes';
import {Observable, of} from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    public myMessageService: MessageService,
  ) { }

getHeroes(): Observable<Hero[]> {
  this.myMessageService.add('HeroService: fetched heroes');
  return of(myMockHeroes);
}

}