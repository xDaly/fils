import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestleaguesComponent } from './bestleagues.component';

describe('BestleaguesComponent', () => {
  let component: BestleaguesComponent;
  let fixture: ComponentFixture<BestleaguesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestleaguesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestleaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
