import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAssignmentComponent } from './create-assignment.component';

describe('CreateAssignmentComponent', () => {
  let component: CreateAssignmentComponent;
  let fixture: ComponentFixture<CreateAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAssignmentComponent]
    });
    fixture = TestBed.createComponent(CreateAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
