import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'controlFlow';
  isloading = true;

  items = [
    {
      Name: 'test1',
      Description: 'description1'
    },
    {
      Name: 'test2',
      Description: 'description2'
    }
  ]

  change()
  {
    this.isloading = !this.isloading;
  }
}
