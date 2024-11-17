import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-blog',
  standalone: true,
  imports: [],
  templateUrl: './item-blog.component.html',
  styleUrl: './item-blog.component.css'
})
export class ItemBlogComponent {
  @Input() title = '';
  @Input() img = '';
  @Input() createDate = '';

  datetime = '';

  OnInit()
  {
    // var currentdate = new Date(); 
    // this.datetime = "Last Sync: " + currentdate.getDate() + "/"
    //                 + (currentdate.getMonth()+1)  + "/" 
    //                 + currentdate.getFullYear();
  }
}
