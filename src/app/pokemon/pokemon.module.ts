import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPokemonComponent } from './form-pokemon/form-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';



@NgModule({
  declarations: [
    FormPokemonComponent,
    EditPokemonComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FormPokemonComponent,
    EditPokemonComponent
  ]
})
export class PokemonModule { }
