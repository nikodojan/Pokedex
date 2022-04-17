import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PokedexPageComponent } from './pokedex-page/pokedex-page.component';
import { PokedexComponent } from './pokedex/pokedex.component';

const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  {path: 'pokedex', component: PokedexPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: '**', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
