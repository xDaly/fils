import { Component, Input, OnInit } from '@angular/core';
import {APIService} from '../../api.service';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  @Input() country: any;
  @Input() sport:any;
  leagues : any[]=[] ;
  status: boolean = true;
  public isCollapsed = true;
  constructor(private api:APIService) { }

  ngOnInit(): void {
  }

  GetLeagues(){
   
    this.api.getleagues(this.sport.Id,this.country.name).subscribe((res)=>{
      
      this.leagues = res
    })
    }

   
clickEvent(){
    this.status = !this.status;  

}

}
