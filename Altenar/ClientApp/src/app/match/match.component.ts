import { APIService } from './../api.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css'],
})
export class MatchComponent implements OnInit {
  @Input() prematch : any ;
  constructor(public api: APIService) {}

  ngOnInit(): void {
    
    
  }

 
}
