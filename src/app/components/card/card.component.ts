import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Show } from '../../interfaces/show.interface';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Output()
  public deleteCard : EventEmitter<string> = new EventEmitter();

  @Input()
  public show : Show = {
    name: "",
    year: 0,
    episodes: 0,
    image: "",
    description: "",
    genre: "",
    likes: []
  }

  public isSelected : boolean = false;

  public changeSelected() : void {
    this.isSelected = !this.isSelected;
    // console.log(this.show.name);
    // console.log(this.isSelected);
  }

  public onDeleteCard() {
    //console.log("Programa " + this.show.name + " eliminado");
    this.deleteCard.emit(this.show.name);
  }
}
