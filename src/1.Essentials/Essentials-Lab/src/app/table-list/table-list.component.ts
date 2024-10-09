import { Component } from '@angular/core';
import { ChildTableComponent } from './child-table/child-table.component';

@Component({
  selector: 'app-table-list',
  standalone: true,
  imports: [ChildTableComponent],
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.css'
})
export class TableListComponent {

}
