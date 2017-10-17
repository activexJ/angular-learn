import { Component } from '@angular/core';
import { Hero } from './hero';
import { OnInit } from '@angular/core';

import { HeroService } from './hero.service';
import {Router} from '@angular/router'
@Component({
  selector: 'my-heroes',
  template: `
  
  <h2>My Heroes</h2>
  <ul class="heroes">
   <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
      <span class="badge">{{hero.id}}</span>{{hero.name}}
    </li>
  </ul>
  <div *ngIf="selectedHero">
  <h2>
    {{selectedHero.name | uppercase}} is my hero
  </h2>
  <button (click)="gotoDetail()">View Details</button>
</div>  
  `,
  styleUrls: ['./heroes.component.css'],
  // templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private router: Router) {

  }

  getHeros(): void {
    //this.heroes = 
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  gotoDetail():void{
    this.router.navigate(['/detail',this.selectedHero.id]);
  }

  ngOnInit(): void {
    this.getHeros();
  }
}


