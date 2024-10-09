import { Component, inject } from '@angular/core';
import { SumServiceService } from './../../Services/SumService/sum-service.service';

@Component({
  selector: 'app-event-handing',
  standalone: true,
  imports: [],
  templateUrl: './event-handing.component.html',
  styleUrl: './event-handing.component.css'
})
export class EventHandingComponent {
 private sumService = inject(SumServiceService);

  messageEventClick = '';
  messageEventClick_SumService = 0;
  messageEventKeyup = 0;
  messageEventKeydown = 0;

  keydownMessage = '';
  keyupMessage = '';
  constructor() 
  {

  }

  onClick()
  {
    this.messageEventClick = 'Clicked';
  }

  onClick_SumService()
  {
    this.messageEventClick_SumService = this.sumService.sumTest();
  }

  onKeyup(event: KeyboardEvent)
  {
    this.keyupMessage = `Key "${event.key}" released (up)`;
    console.log(this.keyupMessage);
    this.messageEventKeyup++;
  }

  onKeydown(event: KeyboardEvent)
  {
    this.keydownMessage = `Key "${event.key}" pressed (down)`;
    console.log(this.keydownMessage);
    this.messageEventKeydown++;
  }
}
