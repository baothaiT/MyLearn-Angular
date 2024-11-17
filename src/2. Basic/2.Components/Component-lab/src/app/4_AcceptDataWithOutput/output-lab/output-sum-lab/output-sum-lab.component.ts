import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-output-sum-lab',
  standalone: true,
  imports: [],
  templateUrl: './output-sum-lab.component.html',
  styleUrl: './output-sum-lab.component.css',
  outputs: ['minusResultEvent']
})
export class OutputSumLabComponent {
  @Output() newItemEvent = new EventEmitter<number>();
  @Output() newItemStringEventFirst = new EventEmitter<string>();
  @Output() newItemStringEventSecond = new EventEmitter<string>();
  minusResultEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void 
  {
  }

  caculatorSum(valueA: string, valueB: string) {
    this.newItemEvent.emit(Number(valueA) + Number(valueB));
    this.newItemStringEventFirst.emit(valueA);
    this.newItemStringEventSecond.emit(valueB);

    this.caculatorMinus(Number(valueA), Number(valueB));
  }
  caculatorMinus(valueA: number, valueB: number)
  {
    this.minusResultEvent.emit(valueA - valueB);
  }
}
