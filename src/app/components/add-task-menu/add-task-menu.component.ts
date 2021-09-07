import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../todo-list/dto/Task';

@Component({
  selector: 'app-add-task-menu',
  templateUrl: './add-task-menu.component.html',
  styleUrls: ['./add-task-menu.component.scss'],
})
export class AddTaskMenuComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  title: string = '';

  constructor() {}

  ngOnInit(): void {}

  addTask() {
    if (!this.title) {
      alert('You must write something!');
      return;
    }

    // 暫時使用時間作為 ID
    let task = new Task(new Date().getTime(), this.title);
    this.title = '';
    this.onAddTask.emit(task);
  }
}
