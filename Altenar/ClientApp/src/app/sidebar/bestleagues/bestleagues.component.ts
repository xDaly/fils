import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIService } from '../../api.service';
import { SocketService } from 'src/app/socket.service';


@Component({
  selector: 'app-bestleagues',
  templateUrl: './bestleagues.component.html',
  styleUrls: ['./bestleagues.component.css']
})
export class BestleaguesComponent implements OnInit {

  sportslist: any;
  bestleaguess: any;
  pays: any[] = [];
  display = false;
  leagues: any[] = [];
  constructor(private http: HttpClient, private api: APIService, private socket: SocketService) {

  }


  ngOnInit() {



    // this.socket.listen('test').subscribe((data) => {
    //   console.log(data);
    // })

   
    //this.getbestleagues();



  }

  getsportslist() {
    this.api.sportlist().subscribe((sl: any) => {
      this.sportslist = sl;
      console.log("spppp", this.sportslist)


    })
  }

  getbestleagues() {
    this.api.bestleauges().subscribe((bs: any) => {
      this.bestleaguess = bs.Result;
    })
  }

  getPaysByIdSports(id) {
    this.api.getPaysByIdSports(id).subscribe((bs) => {
      this.pays = bs;
      console.log("pays", this.pays)

    })
  }
  getLeaguesbyIdSport(idSport, countryName) {
    this.leagues = [];
    this.api.getLeagues(idSport, countryName).subscribe((bs: any) => {
      this.leagues = bs;
      console.log("leagues", this.leagues)

    })
  }
}
