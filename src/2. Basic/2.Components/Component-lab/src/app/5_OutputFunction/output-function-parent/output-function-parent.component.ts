import { Component, Output } from '@angular/core';
import { OutputFunctionChildComponent } from './output-function-child/output-function-child.component';

@Component({
  selector: 'app-output-function-parent',
  standalone: true,
  imports: [OutputFunctionChildComponent],
  templateUrl: './output-function-parent.component.html',
  styleUrl: './output-function-parent.component.css'
})
export class OutputFunctionParentComponent {
  _name : string = '';
  SetName(name: string)
  {
    this._name = name;
  }
}
