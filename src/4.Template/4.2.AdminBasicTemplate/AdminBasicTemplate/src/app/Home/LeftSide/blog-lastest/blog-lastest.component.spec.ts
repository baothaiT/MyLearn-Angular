import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLastestComponent } from './blog-lastest.component';

describe('BlogLastestComponent', () => {
  let component: BlogLastestComponent;
  let fixture: ComponentFixture<BlogLastestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogLastestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogLastestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
