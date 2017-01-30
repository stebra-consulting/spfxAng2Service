import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  public getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  public getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
}


/*
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
*/