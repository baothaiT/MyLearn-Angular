import { Component, inject } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoMetricsComponent } from './todo-metrics/todo-metrics.component';
import { TodolistService} from './../../Services/TodoList/todolist.service';

@Component({
  selector: 'app-todo-app',
  standalone: true,
  imports: [TodoListComponent, TodoMetricsComponent],
  templateUrl: './todo-app.component.html',
  styleUrl: './todo-app.component.css'
})
export class TodoAppComponent {
  private calculatorService = inject(TodolistService);
  sum = this.calculatorService.sum(1 ,2);
  test()
  {
    this.sum = 5;
  }
}
