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

  //Evento para enviar los datos de la serie seleccionada al formulario de edicion (que es el mismo para agregar)
  @Output()
  public editCard : EventEmitter<void> = new EventEmitter();

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

  public onEditCard() {
    //console.log("Nuevos datos " + this.show);
    this.editCard.emit();
    this.scrollToTop();
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
