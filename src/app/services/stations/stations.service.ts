import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Station} from '../../models/station/station';

@Injectable({
    providedIn: 'root'
})
export class StationsService {

    urlStation = 'http://localhost:3001/api/station';
    selectedStation: Station;
    stations: Station[];

    constructor(private http: HttpClient) {
        this.selectedStation = new Station();
    }

    getStations() {
        return this.http.get(this.urlStation);
    }

    getStationById(_id: string) {
        return this.http.get(this.urlStation + `/${_id}`);
    }

    postStation(station: Station) {
        return this.http.post(this.urlStation, station);
    }

    deleteStation(_id: string) {
        return this.http.delete(this.urlStation + `/${_id}`);
    }

}
