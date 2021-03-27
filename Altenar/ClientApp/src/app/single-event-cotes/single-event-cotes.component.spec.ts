import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEventCotesComponent } from './single-event-cotes.component';

describe('SingleEventCotesComponent', () => {
  let component: SingleEventCotesComponent;
  let fixture: ComponentFixture<SingleEventCotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleEventCotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleEventCotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
