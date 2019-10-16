import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfile } from './student-profile.component';

describe('StudentProfile', () => {
  let component: StudentProfile;
  let fixture: ComponentFixture<StudentProfile>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentProfile ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

