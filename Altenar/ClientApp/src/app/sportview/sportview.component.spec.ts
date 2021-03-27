import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportviewComponent } from './sportview.component';

describe('SportviewComponent', () => {
  let component: SportviewComponent;
  let fixture: ComponentFixture<SportviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
