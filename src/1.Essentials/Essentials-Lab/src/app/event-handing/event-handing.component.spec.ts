import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventHandingComponent } from './event-handing.component';

describe('EventHandingComponent', () => {
  let component: EventHandingComponent;
  let fixture: ComponentFixture<EventHandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventHandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventHandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
