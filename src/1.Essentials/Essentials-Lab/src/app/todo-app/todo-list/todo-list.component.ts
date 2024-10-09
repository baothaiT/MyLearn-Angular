import { Component } from '@angular/core';


// @Component({
//   selector: 'app-todo-list',
//   standalone: true,
//   imports: [],
//   template: `
//     <li>(TODO) Read Angular Essentials Guide</li>
//   `,
//   styles: `
//     li {
//       color: red;
//       font-weight: 300;
//     }
//   `
// })

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  taskTitle = 'task1';
  isComplete = false;
  fname = '';
  formIsInvalid = false;

  completeTask() {
    this.isComplete = true;
  }
  updateTitle(newTitle: string) {
    this.taskTitle = newTitle;
  }
  updateStatusClick()
  {
    console.log('1');
  }
}
