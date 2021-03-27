import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'altenar';

  constructor(private http: HttpClient,
    private ngxLoader: NgxUiLoaderService){}
  ngOnInit(){
  
  }
}
