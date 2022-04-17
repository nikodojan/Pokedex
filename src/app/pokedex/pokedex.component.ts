import { Component, OnInit } from '@angular/core';
import { ProkemonApiServiceService } from '../services/prokemon-api-service.service'
import { IApiPokemonReponse, IPokemon, IPropInfo } from '../interfaces/ipokemon';
import { Observable } from 'rxjs';


enum DataDisplay {
  'LIST' = 'LIST', 'DETAILS' = "DETAILS"
}

// contains the data
// passes images/image urls to display

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.component.html',
  providers: [ProkemonApiServiceService],
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  constructor(private pokeService: ProkemonApiServiceService) { 
    pokeService.getPokemonList().subscribe(response=>
      this.pokeList = response);
    this.dataDisplay = DataDisplay.LIST;
    this.currentImage = 'assets/images/pokedex-logo.png';
  }

  pokeList : IApiPokemonReponse | undefined 

  selectedPokemon: IPokemon | undefined

  dataDisplay: string

  images: string[] | undefined;

  currentImage: string;

  selectPokemon(url:string) {
    this.pokeService.getPokemon(url)
      .subscribe(response=> {
        this.selectedPokemon = response;
        const imgPathes = Object.values(this.selectedPokemon.sprites) as string[];
        this.images = imgPathes;
        console.log(this.images);
        this.currentImage = this.images[4];
        console.log('Pokemon downloaded');
        console.log(this.selectedPokemon);
        this.dataDisplay = DataDisplay.DETAILS;
        }
      );
    }   

  setDataDisplay(value:string) {
    if (Object.values(DataDisplay).includes(value as unknown as DataDisplay)){
      this.dataDisplay = value;
    }
    
  }

  ngOnInit(): void {
  }

}
