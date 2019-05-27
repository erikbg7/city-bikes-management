import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Bike} from '../../models/bike/bike';
import {Station} from '../../models/station/station';
import {BikesService} from '../../services/bikes/bikes.service';
import {StationsService} from '../../services/stations/stations.service';



@Component({
  selector: 'app-stations-detail',
  templateUrl: './stations-detail.component.html',
  styleUrls: ['./stations-detail.component.scss'],
})
export class StationsDetailComponent implements OnInit {

    bikes: Bike[];
    assignation: Bike;
    stationBikes: Bike[];
    unassignedBikes: Bike[];


    station: Station;
    stations: Station[];
    stationId: string;


    constructor(private activatedRouter: ActivatedRoute, private bikesService: BikesService,
                private stationsService: StationsService, private router: Router) { }

    ngOnInit() {
        this.activatedRouter.params.subscribe(params => {
            console.log('params ', params['id']);
            if (typeof params['id'] !== 'undefined') {
                this.stationId = params['id'];
            } else {
                this.stationId = '';
            }
        });

        console.error('stationId', this.stationId);
        console.log('id --> ', this.stationId);
        this.getStation();
        this.getBikes();

    }

    getStation() {
      this.stationsService.getStationById(this.stationId).subscribe(res => {
          this.stations = res['stations'];
          this.station = this.stations.find(station => station._id === this.stationId);
          console.error('Station name', this.station.name);

      });
    }

    getBikes() {
        this.bikesService.getBikes()
            .subscribe(res => {
                console.log('res', res);
                this.bikes = res['bikes'];
                this.stationBikes = this.bikes.filter(bike => bike.station === this.station.name);
                this.unassignedBikes = this.bikes.filter(bike => bike.station === 'None');
                console.error('Bikes in the station', this.stationBikes);
            });
    }

    assignBike(id: string, i: number, station: string) {
        this.assignation = this.unassignedBikes[i];
        this.assignation.station = station;
        console.error('bike', this.assignation);
        console.error('bike id', id);

        this.bikesService.updateBike(id, this.assignation)
            .subscribe(
                res => {
                    console.log(res);
                    console.log('Se ha borrado correctamente ', i);
                    this.unassignedBikes.splice(i, 1);
                    this.stationBikes.push(this.assignation);
                });
    }

    unassignBike(id: string, i: number) {
        console.error('index', i);
        this.assignation = this.stationBikes[i];
        console.error('assignation', this.assignation);
        this.assignation.station = 'None';
        this.bikesService.updateBike(id, this.assignation)
            .subscribe(
                res => {
                    console.log(res);
                    console.log('Se ha borrado correctamente ', i);
                    this.stationBikes.splice(i, 1);
                    this.unassignedBikes.push(this.assignation);
                    console.log('Se ha borrado correctamente ', this.bikes);

                });
    }

}
