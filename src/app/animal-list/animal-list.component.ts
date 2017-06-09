import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Animal } from '../animal.model';


@Component({
  selector: 'animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})

export class AnimalListComponent implements OnInit {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(currentAnimal: Animal) {
      this.clickSender.emit(currentAnimal);
    }

 filterByCompleteness: string = "incompleteTasks";

 onChange(optionFromMenu) {
   this.filterByCompleteness = optionFromMenu;
 }

//  toggleCooked(clickedAnimal: Animal, setCompleteness: boolean) {
//   clickedAnimal.cooked = setCompleteness;
// }

 ageColor(currentAnimal){
   if (currentAnimal.age >= 2){
     return "bg-warning";
   } else if (currentAnimal.age <= 2) {
     return  "bg-success";
   } else {
     return "bg-success";
   }
 }

//  haveCooked(clickedAnimal: Animal) {
//    console.log(clickedAnimal)
//   if(clickedAnimal.age < 5) {
//   alert("This is an older animal!");
//   } else {
//     alert("This animal has a lot of life left!");
//   }
// }


  constructor() { }

  ngOnInit() {
  }
}
