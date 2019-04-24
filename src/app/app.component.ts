import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Contamination',
      url: '/home',
      icon: 'stats'
    },
    {
      title: 'City Form',
      url: '/form',
      icon: 'add'
    },
    {
      title: 'User List',
      url: '/list',
      icon: 'people'
    },
    {
      title: 'Gallery',
      url: '/gallery',
      icon: 'camera'
    },
    {
      title: 'Location',
      url: '/location',
      icon: 'pin'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
