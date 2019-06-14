import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
//import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  
  heros: Hero[] = 
    [{
    id: 2,
    name: 'Windstorm'
    },
    {
      id:3,
      name: 'dingus'
    }];

  constructor() { }

  ngOnInit() {
  }

}
