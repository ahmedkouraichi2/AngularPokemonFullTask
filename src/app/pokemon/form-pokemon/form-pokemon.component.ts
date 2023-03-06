import { Component, Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Pokemon } from 'src/app/pokemon';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-form-pokemon',
  templateUrl: './form-pokemon.component.html',
  styleUrls: ['./form-pokemon.component.css']
})
export class FormPokemonComponent implements OnInit {
    pokemon :Pokemon;
  types : string[];
  constructor(private pokemonService :PokemonService,
              private router :Router) { }

  ngOnInit(): void {

    // pokemonTypeList
    this.types = this.pokemonService.getPokemonTypeList();
  }

  hasType(type:string):boolean{
     return this.pokemon.types.includes(type);
  }

  selectType($event :Event,type :string){ 
    const isChecked :boolean = ($event.target as HTMLInputElement).checked;
     if(isChecked){
       this.pokemon.types.push(type);
     }else{
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index,1);
     }
  }

  onSubmit(){
    console.log("Submit form !");
    this.router.navigate(['pokemon',this.pokemon.id]);
  }
   



}
