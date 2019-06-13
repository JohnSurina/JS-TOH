import { Component, OnInit } from '@angular/core';
//import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  Tabs = {
    Tabs1: "myTab1",
    Tabs2: "myTab2"
  }

  heroes = ["AlphaMan", "SuperTrooper"];

  constructor() { }

  ngOnInit() {
  }

}
