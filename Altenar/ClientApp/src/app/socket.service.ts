import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket : any;
  readonly uri:string = "http://192.168.1.26:2000";
  constructor() {
    
   }

   
  
}
