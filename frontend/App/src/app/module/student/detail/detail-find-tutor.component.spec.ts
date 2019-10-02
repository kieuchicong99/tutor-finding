import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { DetailFindTutorComponent } from './detail-find-tutor.component';
describe('DetailFindTutorComponent', () => {
  let component: DetailFindTutorComponent;
  let fixture: ComponentFixture<DetailFindTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFindTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFindTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
