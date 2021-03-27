import { Component, Input, OnInit } from '@angular/core';
import {APIService} from '../../api.service';



@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {
@Input() sport : any ;
isLoading = false;
countries : any[]=[] ;
public isCollapsed = true;
  constructor(private api:APIService) { }

  ngOnInit(): void {
  }

  clickEvent(){
    this.isCollapsed = !this.isCollapsed;       
  }

GetCountries(){
  this.isLoading = true;
this.api.getcountries(this.sport.Id).subscribe((res)=>{
 

  this.countries = res;
  this.isLoading = false;
})
}


}
