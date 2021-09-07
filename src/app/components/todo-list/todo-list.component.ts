import { Component, OnInit } from '@angular/core';
import { Task } from './dto/Task';
import { TodoListService } from '../../services/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private todoListService: TodoListService) {}

  ngOnInit(): void {
    this.tasks = this.todoListService.getTasks();
  }

  addTask(task: Task) {
    this.todoListService.addTask(task);
    this.tasks.push(task);
  }

  deleteTask(task: Task) {
    this.todoListService.deleteTask(task);
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
  }

  setTaskChecked(task: Task) {
    this.todoListService.setTaskChecked(task);
    task.isChecked = !task.isChecked;
  }
}
