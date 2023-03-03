import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pokemonList : Pokemon[]= POKEMONS ;
  pokemonSelected :Pokemon   = this.pokemonList[1];
  constructor(){

  }
  ngOnInit(): void {
     console.table(this.pokemonList);



  }

  title = 'projetAngularPokemeon';


   }


