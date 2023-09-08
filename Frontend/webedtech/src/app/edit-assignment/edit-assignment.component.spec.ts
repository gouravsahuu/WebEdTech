import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAssignmentComponent } from './edit-assignment.component';

describe('EditAssignmentComponent', () => {
  let component: EditAssignmentComponent;
  let fixture: ComponentFixture<EditAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAssignmentComponent]
    });
    fixture = TestBed.createComponent(EditAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
