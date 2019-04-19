import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit {

    latitud: number;
    longitud: number;
    altitud: number;

  constructor(private geolocation: Geolocation) { }

   ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitud=resp.coords.latitude;
      this.longitud=resp.coords.longitude;
      this.altitud=resp.coords.altitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
