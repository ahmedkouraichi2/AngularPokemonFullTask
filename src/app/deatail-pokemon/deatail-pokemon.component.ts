import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemons';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-deatail-pokemon',
  templateUrl: './deatail-pokemon.component.html',
  styleUrls: ['./deatail-pokemon.component.css']
})
export class DeatailPokemonComponent implements OnInit {
  pokemonList : Pokemon[] = POKEMONS ;
  pokemon :Pokemon |undefined ;
  constructor(private route :ActivatedRoute,private router :Router) { }

  ngOnInit(): void {
   const pokementId :string |null = this.route.snapshot.paramMap.get('id');
     if(pokementId){
      this.pokemon  = this.pokemonList.find( pokemon => pokemon.id == +pokementId );
      console.log( +pokementId)
     }else{
       this.pokemon = undefined ;
     }
  }


  goBack(){}

  goToDPageList(){
     this.router.navigate(['/pokemons']);
  }

}
