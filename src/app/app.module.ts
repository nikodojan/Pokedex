import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { DexDisplayComponent } from './dex-display/dex-display.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PokedexPageComponent } from './pokedex-page/pokedex-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { DisplayControlsComponent } from './display-controls/display-controls.component';


@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    DexDisplayComponent,
    HomePageComponent,
    PokedexPageComponent,
    AboutPageComponent,
    DisplayControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
