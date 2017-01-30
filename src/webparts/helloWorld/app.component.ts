import { Component } from '@angular/core';

import { Inject } from '@angular/core';
//import {forwardRef} from '@angular/core';


import { Hero } from './hero';

import { HeroService } from './hero.service';

import { OnInit } from '@angular/core';


@Component({
  selector: 'my-app',
  template: ` <h1> some h1 </h1>  

      <ul>
           <li *ngFor="let hero of heroes" >
            {{ hero.name }}
          </li>
      </ul>

  `

})



export class AppComponent implements OnInit {

  public ngOnInit(): void {
    this.getHeroes();
  }

  public heroes: Array<Hero>;

  constructor(
    @Inject(HeroService) public heroService: HeroService

  ) {
    //constructor code
  }


  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }


  public title = 'Tour of Heroes';
  public selectedHero: Hero;

}
