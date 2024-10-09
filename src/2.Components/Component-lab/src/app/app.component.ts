import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DropZoneComponent } from './Selector/drop-zone/drop-zone.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DropZoneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Component-lab';
}
