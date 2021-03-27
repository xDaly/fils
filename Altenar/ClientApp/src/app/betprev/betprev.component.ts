import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIService } from '../api.service'

@Component({
  selector: 'app-betprev',
  templateUrl: './betprev.component.html',
  styleUrls: ['./betprev.component.css']
})
export class betprevComponent implements OnInit {
  @Input() dataa : any ;
  @Input() prematch : any ;
  active = 1;
  football: any;
  basketball: any;
  tennis: any;
  lv10: any

  displayTotal = false;
  displayBut = false;
  displayEq = false;
  display1x2 = false
  Menu = []
  data="1.09"
  constructor(private http: HttpClient, private api: APIService) { }


  public isCollapsed = true;
  ngOnInit(): void {


  }
  ngAfterViewChecked(){
    
console.log(this.prematch);
  }



  clickEvent() {
    this.isCollapsed = !this.isCollapsed;
  }




  DisplayTotal() {
    this.displayTotal = !this.displayTotal
  }
  DisplayBut() {
    this.displayBut = !this.displayBut
  }
  DisplayEq() {
    this.displayEq = !this.displayEq
  }
  Display1x2() {
    this.display1x2 = !this.display1x2
  }

  sendData(){
    this.api.sendData(this.data);
  }

  status: boolean = false;
clickEventt(){
    this.status = !this.status;       
}

}
