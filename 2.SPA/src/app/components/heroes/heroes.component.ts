import { HeroesService, Heroe } from './../../servicios/heroes.services';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'

})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( private _heroesService:HeroesService,
               private router:Router ) { }

  ngOnInit() {

    this.heroes = this._heroesService.getHeroes();

    // console.loglog(this.heroes);
  }

  verHeroe( idx:number){
    this.router.navigate( ['/heroe',idx] );
    console.log(idx);
    
  }

}
