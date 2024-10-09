import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputFunctionChildComponent } from './output-function-child.component';

describe('OutputFunctionChildComponent', () => {
  let component: OutputFunctionChildComponent;
  let fixture: ComponentFixture<OutputFunctionChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputFunctionChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputFunctionChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
