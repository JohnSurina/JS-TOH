import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { Hero } from './hero';
import { myMockHeroes } from './mock-heroes';
import { Observable, of } from 'rxjs';
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

getHero(searchID:number) : Observable<Hero> {
  var returnHero:Hero = null;
  myMockHeroes.forEach(element => {
    if(element.id==searchID){
      returnHero=element;
    }
  });
  if(returnHero != null){
    this.myMessageService.add(`HeroService: fetched hero @ searchID=${searchID}`);
    return of(returnHero);
  } else {
    console.log('error: no matching hero ID');
  }
}

}