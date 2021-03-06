import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { EditAnimalComponent } from './edit-animal/edit-animal.component';
import { NewAnimalComponent } from './new-animal/new-animal.component';
import { CompletenessPipe } from './completeness.pipe';
import { FormsModule }  from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';



@NgModule({
  declarations: [
    AppComponent,
    AnimalListComponent,
    EditAnimalComponent,
    NewAnimalComponent,
    CompletenessPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
