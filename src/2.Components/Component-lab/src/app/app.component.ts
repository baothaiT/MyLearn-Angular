import { Component } from '@angular/core';
import { OutputFunctionParentComponent } from './5_OutputFunction/output-function-parent/output-function-parent.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [OutputFunctionParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Component-lab';
}
