import { Component, OnInit } from '@angular/core';
import { ProkemonApiServiceService } from '../services/prokemon-api-service.service'
import { IApiPokemonReponse, IPokemon, IPropInfo } from '../interfaces/ipokemon';
import { Observable } from 'rxjs';


enum DataDisplay {
  'LIST' = 'LIST', 'DETAILS' = "DETAILS"
}

export enum DisplayControls {
  'Left' = 'LEFT', 'Right' = 'RIGHT'
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
    this.imageIndex = 4;
  }

  pokeList : IApiPokemonReponse | undefined 

  selectedPokemon: IPokemon | undefined

  dataDisplay: string

  images: string[] | undefined;

  imageIndex: number;
  currentImage: string;

  selectPokemon(url:string) {
    this.pokeService.getPokemon(url)
      .subscribe(response=> {
        this.selectedPokemon = response;
        const imgPathes = Object.values(this.selectedPokemon.sprites) as string[];
        this.images = imgPathes;
        this.currentImage = this.images[this.imageIndex];
        this.dataDisplay = DataDisplay.DETAILS;
        }
      );
    }   

  setDataDisplay(value:string) {
    if (Object.values(DataDisplay).includes(value as unknown as DataDisplay)){
      this.dataDisplay = value;
    }    
  }

  onControlsUsed(direction : DisplayControls) {
    if (this.images){
      switch (direction) {
        case DisplayControls.Left:

          do {
            this.imageIndex = this.imageIndex - 1 >= 0 ? this.imageIndex - 1 : this.images.length - 1 ;
          } while (this.images[this.imageIndex] == null || !this.images[this.imageIndex]?.toString().startsWith('http'))

          this.currentImage = this.images[this.imageIndex];
          break;
          
        case DisplayControls.Right:

          do {
            this.imageIndex = this.imageIndex+1 < this.images.length ? this.imageIndex+1 : 0 ;
          } while (this.images[this.imageIndex] == null || !this.images[this.imageIndex]?.toString().startsWith('http'))

          this.currentImage = this.images[this.imageIndex];
          break;

        default:
          break;
      }
    }

  }



  ngOnInit(): void {
  }

}
