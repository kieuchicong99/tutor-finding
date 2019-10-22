import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorIsRequestedComponent } from './tutor-is-requested.component';

describe('TutorIsRequestedComponent', () => {
  let component: TutorIsRequestedComponent;
  let fixture: ComponentFixture<TutorIsRequestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorIsRequestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorIsRequestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
