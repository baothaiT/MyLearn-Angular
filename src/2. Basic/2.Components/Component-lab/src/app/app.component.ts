import { Component } from '@angular/core';
import { ParentContentProjectComponent } from './6_ContentProjectWithNgContent/parent-content-project/parent-content-project.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParentContentProjectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Component-lab';
}
