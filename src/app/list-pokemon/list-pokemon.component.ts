import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemons';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {
  pokemonList : Pokemon[]= POKEMONS ;
  pokemonSelected :Pokemon   = this.pokemonList[1];
  constructor(private route :Router) { }

  ngOnInit(): void {

    console.table(this.pokemonList);
  }

  goToPokemon(pokemon :Pokemon){
  this.route.navigate(['/pokemons/',pokemon.id])

  }

}
