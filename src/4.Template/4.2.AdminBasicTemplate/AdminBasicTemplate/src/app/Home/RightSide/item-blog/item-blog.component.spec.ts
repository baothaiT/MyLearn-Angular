import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBlogComponent } from './item-blog.component';

describe('ItemBlogComponent', () => {
  let component: ItemBlogComponent;
  let fixture: ComponentFixture<ItemBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
