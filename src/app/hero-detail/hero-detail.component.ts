import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  /* from when this component was supposed to be tied into an HTML doc
  @Input() selectedHeroDetails:Hero;
  */

  selectedHeroDetails:Hero;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id: number = parseInt(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(mySelectedHero => this.selectedHeroDetails = mySelectedHero);
  }

  goBack(): void {
    this.location.back();
  }

}
