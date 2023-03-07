import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPokemonComponent } from './form-pokemon/form-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormPokemonComponent,
    EditPokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    FormPokemonComponent,
    EditPokemonComponent
  ]
})
export class PokemonModule { }
