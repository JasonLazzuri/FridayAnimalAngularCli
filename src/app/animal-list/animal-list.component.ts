import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Animal } from '../animal';


@Component({
  selector: 'app-animal-list',
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
   if (currentAnimal.age >= 5){
     return "bg-danger";
   } else if (currentAnimal.age <5) {
     return  "bg-warning";
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
