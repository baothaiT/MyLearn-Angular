import { Component, OnInit } from '@angular/core';
import { InputLabChildComponent } from './input-lab-child/input-lab-child.component';
import { User } from './../../../Shared/Interfaces/user.model';

@Component({
  selector: 'app-input-lab',
  standalone: true,
  imports: [InputLabChildComponent],
  templateUrl: './input-lab.component.html',
  styleUrl: './input-lab.component.css'
})
export class InputLabComponent {
  dataParent = 'test';

  user: User;

  constructor()
  {
    this.user = {
      userId: 1,
      userName: 'John Doe'
    };
  }

  ngOnInit(): void {
    // You can manipulate or fetch user data here
  }
}
