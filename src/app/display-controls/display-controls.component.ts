import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DisplayControls } from '../pokedex/pokedex.component';

@Component({
  selector: 'display-controls',
  templateUrl: './display-controls.component.html',
  styleUrls: ['./display-controls.component.css']
})
export class DisplayControlsComponent implements OnInit {

  @Output('cross-pressed')
  public crossPressed : EventEmitter<DisplayControls>;
  
  constructor() { 
    this.crossPressed = new EventEmitter<DisplayControls>();
  }

  ngOnInit(): void {
  }

  nextImg() {
    this.crossPressed.emit(DisplayControls.Right);
  }

  previousImg() {
    this.crossPressed.emit(DisplayControls.Left);
  }

}
