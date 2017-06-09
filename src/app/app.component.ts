import { Component } from '@angular/core';
import { Animal } from './animal';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  masterAnimalList: Animal[] = [
    new Animal ("Arctic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool Shade", "Loud Noises"),
    new Animal( "Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sun", "Toys are are not ropebased"),
    new Animal("Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Female", "Delicate roots and leaves", "Loud Noises")
  ];

  selectedAnimal = null;

  editAnimal(currentAnimal) {
    this.selectedAnimal = currentAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }

}
