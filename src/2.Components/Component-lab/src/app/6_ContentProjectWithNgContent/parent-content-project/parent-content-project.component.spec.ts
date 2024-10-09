import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentContentProjectComponent } from './parent-content-project.component';

describe('ParentContentProjectComponent', () => {
  let component: ParentContentProjectComponent;
  let fixture: ComponentFixture<ParentContentProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentContentProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentContentProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
