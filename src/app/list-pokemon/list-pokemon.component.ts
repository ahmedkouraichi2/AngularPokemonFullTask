import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemons';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {
  pokemonList : Pokemon[];
  
  constructor(private route :Router,
              private pokemonService :PokemonService
    ) { }

  ngOnInit(): void {

    this.pokemonList = this.pokemonService.getPokemonList();
  }

  goToPokemon(pokemon :Pokemon){
  this.route.navigate(['/pokemons/',pokemon.id])

  }

}
