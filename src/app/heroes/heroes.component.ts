import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { MatTabsModule } from '@angular/material/tabs';
import { myMockHeroes } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = myMockHeroes;

  selectedHero: Hero;

  villains: Hero[] = 
    [{
      id: 2,
      name: 'Disaster Master'
    },
    {
      id:3,
      name: 'Dingus'
    }];

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero:Hero){
    this.selectedHero=hero;
  }

}
