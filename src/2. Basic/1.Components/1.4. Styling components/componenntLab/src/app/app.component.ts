import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfilePhotoComponent } from './ProfilePhoto/ProfilePhoto.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfilePhotoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'componenntLab';
}
