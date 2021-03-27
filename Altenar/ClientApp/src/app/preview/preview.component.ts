import { APIService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
})
export class PreviewComponent implements OnInit {
  prematch
  data = {
    dataP: [
      {
        id: 1,
        name: 'LiveNow',
      },
      {
        id: 2,
        name: 'Prematch',
      },
    ],
  };

  constructor(private api : APIService) {}

  ngOnInit(): void {
    this.getPrematch()
    
  }
  
  getPrematch() {
    this.api.getPrematch().subscribe((data : any) => {
      this.prematch = data.Body
     
    });
  }
  // getLiveNow() {
  //   this.api.().subscribe((data) => {
  //     this.prematch = data
  //     console.log("prematch", this.prematch)
  //   });
  // }
}
