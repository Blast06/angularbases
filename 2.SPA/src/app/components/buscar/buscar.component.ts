import { HeroesService } from './../../servicios/heroes.services';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  
})
export class BuscarComponent implements OnInit {

  heroes:any[]=[]
  termino:string;


  constructor( private activatedRoute:ActivatedRoute, private _heroesService: HeroesService) {


   }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
    } )
  }
}
