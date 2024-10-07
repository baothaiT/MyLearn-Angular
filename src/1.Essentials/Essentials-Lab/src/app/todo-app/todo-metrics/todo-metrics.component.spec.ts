import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoMetricsComponent } from './todo-metrics.component';

describe('TodoMetricsComponent', () => {
  let component: TodoMetricsComponent;
  let fixture: ComponentFixture<TodoMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoMetricsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
