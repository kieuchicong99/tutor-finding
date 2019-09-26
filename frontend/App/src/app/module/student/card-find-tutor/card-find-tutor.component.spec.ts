import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFindTutorComponent } from './card-find-tutor.component';

describe('CardFindTutorComponent', () => {
  let component: CardFindTutorComponent;
  let fixture: ComponentFixture<CardFindTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFindTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFindTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
