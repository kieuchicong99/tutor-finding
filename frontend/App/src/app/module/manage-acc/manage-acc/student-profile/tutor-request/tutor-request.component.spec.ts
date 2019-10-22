import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorRequestComponent } from './tutor-request.component';

describe('TutorRequestComponent', () => {
  let component: TutorRequestComponent;
  let fixture: ComponentFixture<TutorRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
