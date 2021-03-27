import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportlistComponent } from './sportlist.component';

describe('SportlistComponent', () => {
  let component: SportlistComponent;
  let fixture: ComponentFixture<SportlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
