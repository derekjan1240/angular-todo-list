import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../todo-list/dto/Task';
import { TodoListService } from '../../services/todo-list.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input()
  task!: Task;
  @Output() onSetTaskChecked: EventEmitter<Task> = new EventEmitter();
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  constructor(private todoListService: TodoListService) {}

  ngOnInit(): void {}

  deleteTask(task: Task) {
    this.onDeleteTask.emit(task);
  }

  setTaskchecked(task: Task) {
    this.onSetTaskChecked.emit(task);
  }
}
