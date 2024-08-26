import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'initial-page',
  templateUrl: './initial-page.component.html',
  styleUrl: './initial-page.component.css'
})
export class InitialPageComponent {
  initialPage:Boolean = true;
  @Output() start: EventEmitter<boolean> = new EventEmitter<boolean>();

  startGame() {
    this.start.emit(false);
  }
}
