import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputLabComponent } from './input-lab.component';

describe('InputLabComponent', () => {
  let component: InputLabComponent;
  let fixture: ComponentFixture<InputLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputLabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
