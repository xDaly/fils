import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-betslip',
  templateUrl: './betslip.component.html',
  styleUrls: ['./betslip.component.css']
})
export class BetslipComponent implements OnInit {
  data
  listData: string[] = []
  constructor(private api: APIService) { }

  ngOnInit(): void {
    this.api.castdata.subscribe(
      data => {
        this.data = data
        this.listData.push(this.data)
        console.log("dataaa", this.listData)
      })
  }
  deleteElemnt(id){
    this.listData.splice(id,1);
    console.log("list sup",this.listData)
  }
  deletAll(){
    this.listData.splice(1,this.listData.length);
  }
}
