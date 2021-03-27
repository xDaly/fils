import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SignalRService } from './services/signal-r.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'altenar';

  constructor(
    private http: HttpClient,
    private signalrservice: SignalRService
  ) {}
  ngOnInit() {
    this.signalrservice.startConnection();
    this.signalrservice.addTransferChartDataListener();
  }
}
