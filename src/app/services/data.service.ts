import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get('https://reqres.in/api/users',{observe: 'response'})
  }
  getAqi(){
    return this.http.get('https://api.waqi.info/feed/barcelona/?token=9da5f1c00d33a9a028ccde26fda95d05c7b46e3e', )
  }

  getAqiStation(station){
    return this.http.get('https://api.waqi.info/feed/'+station+'/?token=9da5f1c00d33a9a028ccde26fda95d05c7b46e3e', )
  }

}
