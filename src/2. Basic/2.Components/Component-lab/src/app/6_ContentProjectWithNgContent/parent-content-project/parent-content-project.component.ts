import { Component } from '@angular/core';
import { ChildContentProjectComponent } from './child-content-project/child-content-project.component';

@Component({
  selector: 'app-parent-content-project',
  standalone: true,
  imports: [ChildContentProjectComponent],
  templateUrl: './parent-content-project.component.html',
  styleUrl: './parent-content-project.component.css'
})
export class ParentContentProjectComponent {

}
