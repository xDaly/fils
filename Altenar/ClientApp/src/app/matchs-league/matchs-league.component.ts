import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-matchs-league',
  templateUrl: './matchs-league.component.html',
  styleUrls: ['./matchs-league.component.css']
})
export class MatchsLeagueComponent implements OnInit {
  markets
  marketById
  marketByIdName
  prematchs : any ;
  equipe1
  equipe2

  constructor(private api: APIService) { }

  ngOnInit(): void {
    this.getMarkets()
    this.getPrematch()

  }
  getMarkets() {
    this.api.getMarkets().subscribe((res: any) => {
      console.log("res", res)

      let response = res.Body[0]
      this.markets = response.Markets
      console.log("markets", this.markets)
      this.marketByIdName = this.markets[0]
    })
  }
  getMarket(id) {
    this.markets.forEach(element => {
      if (element.Id == id)
        this.marketById = element
    });
    console.log("mmm", this.marketById)
  }
  getPrematch() {
    this.api.getPrematch().subscribe((res: any) => {
      let response = res.Body
      this.prematchs = response
      console.log("prematch" ,this.prematchs)
      
    })
  }
}
