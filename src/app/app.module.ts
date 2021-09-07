import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TaskComponent } from './components/task/task.component';
import { AddTaskMenuComponent } from './components/add-task-menu/add-task-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TaskComponent,
    AddTaskMenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
