import { Component, OnInit } from '@angular/core';
import {Station} from '../../models/station/station';
import {Router} from '@angular/router';
import {StationsService} from '../../services/stations/stations.service';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss', '../../res/fonts/util.css', '../../res/vendor/bootstrap/css/bootstrap.min.css', '../../res/fonts/font-awesome-4.7.0/css/font-awesome.min.css',
      '../../res/fonts/iconic/css/material-design-iconic-font.min.css', '../../res/vendor/animate/animate.css', '../../res/vendor/css-hamburgers/hamburgers.min.css', '../../res/vendor/animsition/css/animsition.min.css',
      '../../res/vendor/select2/select2.min.css', '../../res/vendor/daterangepicker/daterangepicker.css']
})
export class StationsComponent implements OnInit {

    stations: Station[];

    constructor(private stationService: StationsService, private router: Router) { }

    ngOnInit() {
        this.getStations();
    }

    getStations() {

        this.stationService.getStations()
            .subscribe(res => {
                this.stations = res['stations'];
            });
        console.log(this.stations);

    }

}

