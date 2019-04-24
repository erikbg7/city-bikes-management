import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private originalAqi= new BehaviorSubject("0");
  chosenAqi = this.originalAqi.asObservable()

  constructor() { }

  changeAqi(id: any) {
    this.originalAqi.next(id)
  }

}
