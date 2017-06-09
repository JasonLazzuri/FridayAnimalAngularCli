import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Animal } from '../animal.model';


@Component({
  selector: 'edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.css']
})
export class EditAnimalComponent implements OnInit {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

  // haveCooked(clickedRecipe: Recipe) {
  //   console.log(clickedRecipe)
  //  if(clickedRecipe.cooked === true) {
  //    alert("This recipe has been cooked!");
  //  } else {
  //    alert("This recipe has not been tried, test it out!");
  //  }
  // }


  constructor() { }

  ngOnInit() {
  }
}
