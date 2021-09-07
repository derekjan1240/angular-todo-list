import { Injectable } from '@angular/core';
import { Task } from '../components/todo-list/dto/Task';
import { FAKE_TASKS } from '../components/todo-list/mock-tasks';

@Injectable({
  providedIn: 'root',
})
// TODO: 打 API
export class TodoListService {
  constructor() {}

  getTasks(): Task[] {
    return FAKE_TASKS;
  }

  deleteTask(task: Task): Task {
    return task;
  }

  setTaskChecked(task: Task): Task {
    return task;
  }

  addTask(task: Task): Task {
    return task;
  }
}
