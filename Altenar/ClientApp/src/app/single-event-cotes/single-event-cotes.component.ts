import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-event-cotes',
  templateUrl: './single-event-cotes.component.html',
  styleUrls: ['./single-event-cotes.component.css']
})
export class SingleEventCotesComponent implements OnInit {

  constructor() { }
  public isCollapsed = true;

  ngOnInit(): void {
  }
  clickEvent(){
    this.isCollapsed = !this.isCollapsed;       
}
}
