import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {APIService} from '../../api.service';

@Component({
  selector: 'app-sportlist',
  templateUrl: './sportlist.component.html',
  styleUrls: ['./sportlist.component.css']
})
export class SportlistComponent implements OnInit {
  sportslist : any;
  countries : any ;
  isLoading = false;
  
  constructor(private http:HttpClient , private api:APIService) {
    this.getsportslist();
   }

  ngOnInit(): void {
    
    
  }




  
  getsportslist(){
    this.isLoading = true;
    this.api.sportlist().subscribe((sl: any)=>{
      this.sportslist = sl;
      this.isLoading = false;
      
      
    })
  }
  


}
