import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {Bike} from '../../models/bike/bike';
import {BikesService} from '../../services/bikes/bikes.service';

@Component({
    selector: 'app-bikes',
    templateUrl: './bikes.component.html',
    styleUrls: ['./bikes.component.scss']
})
export class BikesComponent implements OnInit {

    bikes: Bike[];
    assignedBikes: Bike[];
    unassignedBikes: Bike[];

    assignation: Bike;

    bindStation: boolean;
    selectedStation: string;

    constructor(private bikesService: BikesService, private router: Router) { }

    ngOnInit() {
        this.getBikes();
        this.bindStation = false;
    }

    getBikes() {

        this.bikesService.getBikes()
            .subscribe(res => {
                console.log('res', res);
                this.bikes = res['bikes'];
                this.assignedBikes = this.bikes.filter( bike => bike.station !== 'None');
                this.unassignedBikes = this.bikes.filter(bike => bike.station === 'None');

            });
        console.log(this.bikes);
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
                    this.assignedBikes.push(this.assignation);
                });
    }

    triggerBind() {
        this.bindStation = !this.bindStation;
    }


}
