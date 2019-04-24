import { Component, OnInit } from '@angular/core';
import {CityService} from '../../services/city.service';

@Component({
  selector: 'app-contamination',
  templateUrl: './contamination.component.html',
  styleUrls: ['./contamination.component.scss'],
})
export class ContaminationComponent implements OnInit {

  aqi: any;

  constructor(private cityService:CityService) { }

  ngOnInit() {
    this.cityService.chosenAqi.subscribe(aqi => this.aqi = aqi)
  }

  aqiStatus(val) {

    if (val <= 50) {
      return { code: 'good', val: 'Good' };
    } else if (val <= 100) {
      return { code: 'mod', val: 'Moderate' };
    } else if (val <= 200) {
      return { code: 'unhealthy', val: 'Unhealthy' };
    } if (val <= 300) {
      return { code: 'vunhealthy', val: 'Very Unhealthy' };
    } else if (val > 300) {
      return { code: 'hazardous', val: 'Hazardous' };
    } else {
      return { code: '', val: '' }
    }
  }

}
