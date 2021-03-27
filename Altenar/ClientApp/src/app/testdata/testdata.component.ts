import { Component, OnInit } from '@angular/core';
import { SignalRService } from '../services/signal-r.service';

@Component({
  selector: 'app-testdata',
  templateUrl: './testdata.component.html',
  styleUrls: ['./testdata.component.css']
})
export class TestdataComponent implements OnInit {

  data = "hello";
  constructor(private signalService:SignalRService) { }

  ngOnInit(): void {
    this.signalService.dataSubject.asObservable().subscribe(res=>{
        this.data = res;
    })
  }

}
