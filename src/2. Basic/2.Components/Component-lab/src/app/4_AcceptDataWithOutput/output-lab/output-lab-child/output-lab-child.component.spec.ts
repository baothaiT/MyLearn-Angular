import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputLabChildComponent } from './output-lab-child.component';

describe('OutputLabChildComponent', () => {
  let component: OutputLabChildComponent;
  let fixture: ComponentFixture<OutputLabChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputLabChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputLabChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
