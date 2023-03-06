import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeatailPokemonComponent } from './deatail-pokemon/deatail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  //{ path: '**', component: PageNotFoundComponent },
   {path:'pokemons',component:  ListPokemonComponent},
   {path:'pokemons/:id',component:DeatailPokemonComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
