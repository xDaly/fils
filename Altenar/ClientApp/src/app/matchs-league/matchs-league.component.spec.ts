import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchsLeagueComponent } from './matchs-league.component';

describe('MatchsLeagueComponent', () => {
  let component: MatchsLeagueComponent;
  let fixture: ComponentFixture<MatchsLeagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchsLeagueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchsLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
