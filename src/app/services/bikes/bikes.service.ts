import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Bike} from '../../models/bike/bike';

@Injectable({
  providedIn: 'root'
})
export class BikesService {

    urlBike = 'http://localhost:3001/api/bike';
    selectedBike: Bike;
    bikes: Bike[];

    constructor(private http: HttpClient) {
        this.selectedBike = new Bike();
    }

    getBikes() {
        return this.http.get(this.urlBike);
    }


    deleteBike(_id: string) {
        return this.http.delete(this.urlBike + `/${_id}`);
    }

    updateBike(_id: string, bike: Bike) {
        return this.http.put(this.urlBike + `/${_id}`, bike);
    }

}
