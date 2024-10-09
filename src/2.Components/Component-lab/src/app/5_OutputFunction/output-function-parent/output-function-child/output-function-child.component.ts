import { Component, output, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-function-child',
  standalone: true,
  imports: [],
  templateUrl: './output-function-child.component.html',
  styleUrl: './output-function-child.component.css'
})
export class OutputFunctionChildComponent implements OnInit {
  // _name = output<string>();
  _name = output<string>({alias: 'ngxNameChange'});

  constructor(){}

  ngOnInit(): void {}

  SetName(name: string)
  {
    this._name.emit(name);
  }
}
