import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputLabComponent } from './output-lab.component';

describe('OutputLabComponent', () => {
  let component: OutputLabComponent;
  let fixture: ComponentFixture<OutputLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputLabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
