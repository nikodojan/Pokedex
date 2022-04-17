import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dex-display',
  templateUrl: './dex-display.component.html',
  styleUrls: ['./dex-display.component.css']
})
export class DexDisplayComponent implements OnInit {

  @Input() 
  imagePath:string;
  constructor() { 
    this.imagePath = 'assets/images/pokedex-logo.png'
  }

  ngOnInit(): void {
  }

}
