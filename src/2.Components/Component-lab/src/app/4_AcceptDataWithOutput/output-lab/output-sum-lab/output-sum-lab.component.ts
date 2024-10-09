import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-output-sum-lab',
  standalone: true,
  imports: [],
  templateUrl: './output-sum-lab.component.html',
  styleUrl: './output-sum-lab.component.css'
})
export class OutputSumLabComponent {
  @Output() newItemEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void 
  {
  }

  caculatorSum(valueA: string, valueB: string) {
      this.newItemEvent.emit(Number(valueA) + Number(valueB));
  }
}
