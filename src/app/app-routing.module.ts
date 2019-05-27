import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {FormComponent} from './pages/form/form.component';
import {ContaminationComponent} from './pages/contamination/contamination.component';
import {StationsComponent} from './pages/stations/stations.component';
import {BikesComponent} from './pages/bikes/bikes.component';
import {StationsDetailComponent} from './pages/stations-detail/stations-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  { path: 'list',
    loadChildren: './pages/list/list.module#ListPageModule'
  },
  { path: 'gallery',
    loadChildren: './pages/gallery/gallery.module#GalleryPageModule' },
  { path: 'location',
    loadChildren: './pages/geolocation/geolocation.module#GeolocationPageModule' },
  { path: 'form',
    component: FormComponent },
  { path: 'contamination',
    component: ContaminationComponent },
  { path: 'stations',
    component: StationsComponent },
  { path: 'bikes',
    component: BikesComponent },
    { path: 'station-bikes/:id',
        component: StationsDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
