import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  urlc= 'http://91.134.253.18:3000/country/';
  urll= 'http://91.134.253.18:3000/leagues/';
  urlsport = 'http://91.134.253.18:3000/Sport';
  urlsportwc = 'http://91.134.253.18:3000/Sportswithcount'
  urlPaysByIdSports = "http://91.134.253.18:3000/country/"
  private data = new BehaviorSubject<string>("");
  castdata = this.data.asObservable();


  constructor(private http: HttpClient) {
    this.sportlist();

    this.live10ev();
    this.bestleauges();
  }
  sportlist() {
    return this.http.get(this.urlsportwc);
  }


  bestleauges() {
    return this.http.get(this.urll);
  }
  live10ev() {
    return this.http.get(this.urlsportwc);
  }
  sendData(data) {

    this.data.next(data);

  }

  getPaysByIdSports(id) {
    return this.http.get<any[]>(this.urlPaysByIdSports + id);
  }

  getLeagues(idSports, countryName) {
    return this.http.get<any[]>("http://91.134.253.18:3000/leagues/"+idSports+"/"+countryName)
  }
  getMarkets(){
    return this.http.get<any[]>("https://prematch.lsports.eu/OddService/GetFixtureMarkets?username=mohamedaliezzeddine1@gmail.com&password=f3qf23qca&guid=008cc954-af5e-4a2d-b570-68e2a66e552d&Locations=243&Sports=6046&Fixtures=6384145")

  }
  getPrematch(){
    return this.http.get<any[]>("https://prematch.lsports.eu/OddService/GetFixtures?username=mohamedaliezzeddine1@gmail.com&password=f3qf23qca&guid=008cc954-af5e-4a2d-b570-68e2a66e552d&Locations=243&Sports=6046")

  }
  getBet(fixture){
    return this.http.get<any[]>("https://prematch.lsports.eu/OddService/GetFixtureMarkets?username=skillwarecomp@gmail.com&password=h6rt7m34&guid=a1f5f44b-01fd-48b4-b2fd-86ecf873a8f0&Locations=243&Sports=6046&Fixtures="+fixture)

  }
  // getLiveNow(){
  //   return this.http.get<any[]>("https://prematch.lsports.eu/OddService/GetFixtureMarkets?username=skillwarecomp@gmail.com&password=h6rt7m34&guid=a1f5f44b-01fd-48b4-b2fd-86ecf873a8f0&Locations=243&Sports=6046&Fixtures="+fixture)

  // }
  

 
 



getcountries(sportid):Observable<any[]>{

  return   this.http.get<any[]>(this.urlc+sportid);


}

getleagues(sportid,countryname):Observable<any[]>{
  
  return this.http.get<any[]>(this.urll+sportid+'/'+countryname);
}

}