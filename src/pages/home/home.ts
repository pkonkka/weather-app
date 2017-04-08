import { Component } from '@angular/core';
import { LoadingController, ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { GeoCodeService } from '../../services/geocode';
import { WeatherService } from '../../services/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // forecast: Forecast[] = [];
  allForecasts: any;
  current: any;
  city: string = 'Turku';

  constructor(
    private geoService: GeoCodeService, 
    private weatherService: WeatherService,
    private geolocation: Geolocation,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController) {
    
  }

  // ----------------------------------------------------------------------------------
  ionViewWillEnter() {

    this.weatherService.getCurrentWeather(this.city)
      .subscribe(
        current => {
          this.current = current;
          this.city = this.current.name;
        }
      )

    this.weatherService.getForecast(this.city)
      .subscribe(
        forecast => {
          this.allForecasts = Object.keys(forecast.list).map(key => forecast.list[key]);
        }
      );

  }

  // ----------------------------------------------------------------------------------
  onSetCity() {

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
          // this.location.lat = location.coords.latitude;
          // this.location.lng = location.coords.longitude;
          // this.locationIsSet = true;
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


}
