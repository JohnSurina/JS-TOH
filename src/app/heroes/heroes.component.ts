import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { MatTabsModule } from '@angular/material/tabs';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

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

  constructor(
    private heroServiceInjectee: HeroService,
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero:Hero){
    this.selectedHero=hero;
  }

  getHeroes(): void {
    this.heroServiceInjectee.getHeroes().subscribe(ThisVariableIsUnrelatedToAnything => this.heroes = ThisVariableIsUnrelatedToAnything);
  }

}
