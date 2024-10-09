import { Component } from '@angular/core';
import { OutputLabChildComponent } from './output-lab-child/output-lab-child.component';
import { OutputSumLabComponent } from './output-sum-lab/output-sum-lab.component';

@Component({
  selector: 'app-output-lab',
  standalone: true,
  imports: [OutputLabChildComponent, OutputSumLabComponent],
  templateUrl: './output-lab.component.html',
  styleUrl: './output-lab.component.css'
})
export class OutputLabComponent {
  items = ['item1', 'item2', 'item3', 'item4'];
  sum: number = 0;
  firstNumberString: string = '';
  secondNumberString: string = '';
  addItem(newItem: string) {
    this.items.push(newItem);
  }
  calculator(value: number)
  {
    this.sum = value;
  }
  GetFirstNumber(value: string)
  {
    this.firstNumberString = value;
  }
  GetSecondNumber(value: string)
  {
    this.secondNumberString = value;
  }
}
