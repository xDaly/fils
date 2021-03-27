import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';  // or from "@microsoft/signalr" if you are using a new library

@Injectable({
  providedIn: 'root'
})
export class SignalRService {


private hubConnection: signalR.HubConnection;
 
  dataSubject = new BehaviorSubject<any>("hello");

constructor() { }

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
                            .withUrl('https://localhost:5001/bets')
                            .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  public addTransferChartDataListener = () => {
    this.hubConnection.on('betupdate', (data) => {
      debugger;
      this.dataSubject.next(data);
      console.log(data);
    });
  }
}