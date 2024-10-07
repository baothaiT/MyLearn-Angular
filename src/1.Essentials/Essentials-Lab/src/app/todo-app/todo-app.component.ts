import { Component } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoMetricsComponent } from './todo-metrics/todo-metrics.component';

@Component({
  selector: 'app-todo-app',
  standalone: true,
  imports: [TodoListComponent, TodoMetricsComponent],
  templateUrl: './todo-app.component.html',
  styleUrl: './todo-app.component.css'
})
export class TodoAppComponent {

}
