import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CouponcodeComponent } from './couponcode/couponcode.component';
import { BetslipComponent } from './betslip/betslip.component';
import { BestleaguesComponent } from './sidebar/bestleagues/bestleagues.component';
import { SportviewComponent } from './sportview/sportview.component';
import { betprevComponent } from './betprev/betprev.component';
import { MatchsLeagueComponent } from './matchs-league/matchs-league.component'

import {APIService} from './api.service';
import { MiddleDashInjectorPipe } from './pipes/middle-dash-injector.pipe';
import { SingleEventCotesComponent } from './single-event-cotes/single-event-cotes.component';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { SportlistComponent } from './sidebar/sportlist/sportlist.component';
import { NgSpinnerModule } from 'ng-bootstrap-spinner';
import { CountryComponent } from './sidebar/country/country.component';
import { LeaguesComponent } from './sidebar/leagues/leagues.component';
import { SportComponent } from './sidebar/sport/sport.component';
import { PreviewComponent } from './preview/preview.component';
import { MatchComponent } from './match/match.component';
import { TopLeagueComponent } from './top-league/top-league.component';






@NgModule({
  declarations: [
    AppComponent,
    CouponcodeComponent,
    BetslipComponent,
    BestleaguesComponent,
    SportviewComponent,
    betprevComponent,
    MatchsLeagueComponent,
    MiddleDashInjectorPipe,
    SingleEventCotesComponent,
    SportlistComponent,
    CountryComponent,
    LeaguesComponent,
    SportComponent,
    PreviewComponent,
    MatchComponent,
    TopLeagueComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    NgSpinnerModule,
    NgxUiLoaderModule,

  ],
  providers: [
    APIService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
