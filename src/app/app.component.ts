import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    
  constructor(){

  }
  ngOnInit(): void {
     console.table(this.pokemonList);
     this.selectPokemon(this.pokemonList[0]);
  }
  pokemonList = ['Bulbizarre','Salaméche','Carapuce']
  title = 'projetAngularPokemeon';


        selectPokemon(pokemonName : string){
        console.log(`vous aves cliquer sur le pokumon n ${pokemonName}`);
      }

}
