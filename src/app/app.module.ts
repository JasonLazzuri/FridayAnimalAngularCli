import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { NewAnimalComponent } from './new-animal/new-animal.component';
import { EditAnimalComponent } from './edit-animal/edit-animal.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalListComponent,
    NewAnimalComponent,
    EditAnimalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
