import { Injectable } from '@angular/core';

import {HttpClient} from'@angular/common/http';
import{Observable} from 'rxjs';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { 
  }

  GetStudentData():Observable<any>
  {
    return this.http.get('https://jsonblob.com/api/jsonblob/43a4c65e-3a99-11e9-9959-cf50deb818df');
  }
  GetWeatherData():Observable<any>
  {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=a37f9bc2e798bb23f526b788685638a1')
  }

}
