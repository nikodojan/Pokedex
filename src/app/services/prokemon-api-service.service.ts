import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IApiPokemonReponse, IPokemon, IPropInfo } from '../interfaces/ipokemon';
//import { platform } from 'os';

@Injectable({
  providedIn: 'root'
})
export class ProkemonApiServiceService {

  constructor(private httpClient:HttpClient) { }

  public getPokemonList(): Observable<IApiPokemonReponse> {
    return this.httpClient.get<IApiPokemonReponse>('https://pokeapi.co/api/v2/pokemon')
    .pipe(
      map(response => {
        return {
          next: response.next,
          previous: response.previous,
          results: response.results.map<IPropInfo>(pok=> { 
            let arr = pok.name.split('');
            arr[0] = arr[0].toUpperCase();
            pok.name = arr.join('')
            return pok})
        }
      })
    )
  }
  
  public getPokemon(url:string): Observable<IPokemon> {
    return this.httpClient.get<IPokemon>(url)
    .pipe(
      map(response=> {
        return {
          id: response.id,
          name: response.name,
          types: response.types,
          weight: response.weight,
          abilities: response.abilities,
          moves: response.moves,
          sprites: response.sprites
        }
      })
    )
  }

  // private capitalizeName(name:string) : string {
  //   let arr = pok.name.split('');
  //   arr[0] = arr[0].toUpperCase();
  //           pok.name = arr.join('')
  // }

}
