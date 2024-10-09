import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildContentProjectComponent } from './child-content-project.component';

describe('ChildContentProjectComponent', () => {
  let component: ChildContentProjectComponent;
  let fixture: ComponentFixture<ChildContentProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildContentProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildContentProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
