import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { TaskListComponent }  from './task-list.component';
import { EditTaskComponent } from './edit-task.component';
import { NewTaskComponent } from './new-task.component';


@NgModule({
  imports: [ BrowserModule, FormsModule ], //lists requirements for this module only
  declarations: [ AppComponent,
                  TaskListComponent,
                  EditTaskComponent,
                  NewTaskComponent], //components this module controls
  bootstrap:    [ AppComponent ] //launch these components on load
})

export class AppModule{} //standard name for root module class
