import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputSumLabComponent } from './output-sum-lab.component';

describe('OutputSumLabComponent', () => {
  let component: OutputSumLabComponent;
  let fixture: ComponentFixture<OutputSumLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputSumLabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputSumLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
