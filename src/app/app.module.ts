 import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BgDirective } from './bg.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { DeatailPokemonComponent } from './deatail-pokemon/deatail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PokemonModule } from './pokemon/pokemon.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    BgDirective,
    PokemonTypeColorPipe,
    DeatailPokemonComponent,
    ListPokemonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PokemonModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
