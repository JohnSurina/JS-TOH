import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { Hero } from './hero';
import { myMockHeroes } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import {HttpClient, HttpHeaders } from '@angular/common/http';

import {catchError, map, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  private heroesUrl = 'api/heroes'; //URL to web api

  constructor(
    private http: HttpClient,
    public myMessageService: MessageService,
  ) { }

getHeroes(): Observable<Hero[]> {
  this.myMessageService.add('HeroService: fetched heroes');
  //return of(myMockHeroes); // Toggle on to use hard mock data w/o HTTP Request
  return this.http.get<Hero[]>(this.heroesUrl).pipe(catchError(this.handleError<Hero[]>('getHeroes', []))); // Toggle on to use HTTP Request information from .../src/app/in-memory-data.service.ts
}

getHero(searchID:number) : Observable<Hero> {
/* 
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
*/

const url = `${this.heroesUrl}/${searchID}`;
return this.http.get<Hero>(url).pipe(
  tap(_ => this.log(`fetched hero id=${searchID}`)),
  catchError(this.handleError<Hero>(`getHero id=${searchID}`))
);

}

private handleError<T> (operation:string = 'operation', result?: T) {
  return (error: any): Observable<T> => {
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
 
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
     
        // Let the app keep running by returning an empty result.
        return of(result as T);
  }
}

/** Log a HeroService message with the MessageService */
private log(message: string) {
  this.myMessageService.add(`HeroService: ${message}`);
}

updateHero(hero:Hero):Observable<any /* try to put Hero here and see what happens */ > {
  return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
    tap(_ => this.log(`updated hero id=${hero.id}`)),
    catchError(this.handleError<any>('updateHero'))
  );
}

addHero(hero:Hero):Observable<Hero>{
  return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
    tap((newHero:Hero) => this.log(`added hero w/ id=${newHero.id}`))
  );
}

deleteHero(existingHero:Hero|number):Observable<Hero>{
  const id = typeof existingHero === 'number' ? existingHero : existingHero.id;
  const url = `${this.heroesUrl}/${id}`;

  return this.http.delete<Hero>(url,httpOptions).pipe(tap(_ => this.log(`deleted hero id=${id}`)),
  catchError(this.handleError<Hero>('deleteHero')));

}

searchHeroes(term: string): Observable<Hero[]>{
  if(!term.trim()){
    return of([]);
    }
  return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`)  // the forward-slash+?  is a query string, don't forget that.
  .pipe(tap(_ => this.log(`found heroes matching "${term}"`)),
  catchError(this.handleError<Hero[]>('searchHeroes', [])));
}

}