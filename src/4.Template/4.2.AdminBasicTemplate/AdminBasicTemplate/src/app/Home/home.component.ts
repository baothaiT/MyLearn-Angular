import { Component, OnInit } from '@angular/core';
import { ItemBlogComponent } from './RightSide/item-blog/item-blog.component';
import { AboutMeComponent } from './LeftSide/about-me/about-me.component';
import { BlogLastestComponent } from './LeftSide/blog-lastest/blog-lastest.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ItemBlogComponent, AboutMeComponent, BlogLastestComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  datetime = '';
  
  OnInit()
  {
    console.log('test');
  }
  items = [
    { 
      name: 'TITLE HEADING 1', 
      img: '/assests/img/blog1.png', 
      description: 'Description for Item 1'
      // createDate: this.datetime
    },
    { 
      name: 'TITLE HEADING 2', 
      img: '/assests/img/blog2.png', 
      description: 'Description for Item 2',
      // createDate: this.datetime
    },
    { 
      name: 'TITLE HEADING 3', 
      img: '/assests/img/blog3.png', 
      description: 'Description for Item 3',
      // createDate: this.datetime
    },
  ];  
}
