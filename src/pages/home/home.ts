import { Component } from '@angular/core';
import { LoadingController, NavController, ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { AddPlacePage } from '../add-place/add-place';

import { GeoCodeService } from '../../services/geocode';
import { WeatherService } from '../../services/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  allForecasts: any;
  current: any;
  city: string = 'Turku';

  constructor(
    private geoService: GeoCodeService, 
    private weatherService: WeatherService,
    private geolocation: Geolocation,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private toastCtrl: ToastController) {
    
  }

  // ----------------------------------------------------------------------------------
  ionViewWillEnter() {

    this.weatherService.getCurrentWeather()
      .subscribe(
        current => {
          this.current = current;
          this.city = this.current.name;
        }
      )

    this.weatherService.getForecast()
      .subscribe(
        forecast => this.allForecasts = forecast
      );

  }

  // --------------------------------------------------------------------------------
  onLocate() {
    const loader = this.loadingCtrl.create({
      content: 'Getting your Location...'
    });
    loader.present();

    this.geolocation.getCurrentPosition()
      .then(
        location => {
          loader.dismiss();
        }
      )
      .catch(
        error => {
          loader.dismiss();
          const toast = this.toastCtrl.create({
            message: 'Could not get your location, please pick manually.',
            duration: 2500
          });
          toast.present();
        }
      );
  }

  // --------------------------------------------------------------------------------
  onSetPlace() {
    this.navCtrl.push(AddPlacePage);
  }

}
