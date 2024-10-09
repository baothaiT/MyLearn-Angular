import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputFunctionParentComponent } from './output-function-parent.component';

describe('OutputFunctionParentComponent', () => {
  let component: OutputFunctionParentComponent;
  let fixture: ComponentFixture<OutputFunctionParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputFunctionParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputFunctionParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
