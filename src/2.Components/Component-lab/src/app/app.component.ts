import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputLabComponent } from './3_AcceptDataWithInput/input-lab/input-lab.component';
import { OutputLabComponent } from './4_AcceptDataWithOutput/output-lab/output-lab.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputLabComponent, OutputLabComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Component-lab';
}
