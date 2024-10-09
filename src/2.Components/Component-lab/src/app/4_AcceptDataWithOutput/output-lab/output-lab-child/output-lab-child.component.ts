import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-lab-child',
  standalone: true,
  imports: [],
  templateUrl: './output-lab-child.component.html',
  styleUrl: './output-lab-child.component.css'
})
export class OutputLabChildComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void 
  {
  }

  addNewItem(value: string) {
      this.newItemEvent.emit(value);
  }
}
