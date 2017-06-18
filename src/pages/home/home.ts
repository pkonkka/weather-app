import { Component } from '@angular/core';
import { LoadingController, NavController, ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { AddPlacePage } from '../add-place/add-place';

import { GeoCodeService } from '../../services/geocode';
import { WeatherService } from '../../services/weather';

import { localDate } from '../../utils/localDate';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  allForecasts: any;
  forecastArray: any = [[],[]];
  current: any;
  city: string = 'Turku';
  iconPath: string;

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
          this.iconPath = this.weatherService.getCurrentWeatherIcon(this.current);
        }
      )

    this.weatherService.getForecast()
      .subscribe(
        forecast => { 
          this.allForecasts = forecast;

        console.log(this.allForecasts);

          let j = 0; let k = 0;
          for (let i = 0; i < this.allForecasts.length; i++) {

            // this.forecastArray[j][k++] = this.allForecasts[i];
            this.forecastArray[k] = [j, new Object(this.allForecasts[i])];

            if (i < this.allForecasts.length - 1) {
              if (localDate(this.allForecasts[i].dt_txt) !== localDate(this.allForecasts[i+1].dt_txt)) {                
                j++; 
                k = 0;               
              }
            }

          }

        }
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
