import { PreviewComponent } from './preview/preview.component';
import { TopLeagueComponent } from './top-league/top-league.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { betprevComponent } from './betprev/betprev.component';
import { MatchsLeagueComponent } from './matchs-league/matchs-league.component';
import { SportviewComponent } from './sportview/sportview.component';

const routes: Routes = [
  {
    path: 'matchsLeaugue', component: MatchsLeagueComponent
  },
  {
    path: 'topLeague', component: TopLeagueComponent
  },
  {
    path: '', component: PreviewComponent,

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
