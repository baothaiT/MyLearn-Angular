import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputLabComponent } from './3_AcceptDataWithInput/input-lab/input-lab.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputLabComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Component-lab';
}
