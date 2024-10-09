import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoAppComponent } from '../../src/app/todo-app/todo-app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TableListComponent } from './table-list/table-list.component';
import { EventHandingComponent } from './event-handing/event-handing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoAppComponent, SignUpComponent, TableListComponent, EventHandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Essentials-Lab';
}
