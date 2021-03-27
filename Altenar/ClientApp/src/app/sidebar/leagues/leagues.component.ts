import { Component, Input, OnInit } from '@angular/core';
import {APIService} from '../../api.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {
  @Input() league: any;
  status: boolean = true;
  constructor(private api:APIService) { }

  ngOnInit(): void {
  }
  clickEvent(){
    this.status = !this.status;  

}
}
