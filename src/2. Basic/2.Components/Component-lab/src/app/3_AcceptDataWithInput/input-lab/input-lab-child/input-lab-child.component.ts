import { Component, Input } from '@angular/core';
import { User } from './../../../../Shared/Interfaces/user.model';

@Component({
  selector: 'app-input-lab-child',
  standalone: true,
  imports: [],
  templateUrl: './input-lab-child.component.html',
  styleUrl: './input-lab-child.component.css'
})
export class InputLabChildComponent {
  @Input({required: true}) dataChild = '';
  @Input({required: true}) user!: User;
}
