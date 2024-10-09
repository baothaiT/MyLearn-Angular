import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputLabChildComponent } from './input-lab-child.component';

describe('InputLabChildComponent', () => {
  let component: InputLabChildComponent;
  let fixture: ComponentFixture<InputLabChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputLabChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputLabChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
