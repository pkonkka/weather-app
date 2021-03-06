import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddPlacePage } from '../pages/add-place/add-place';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GeoCodeService } from '../services/geocode';
import { WeatherService } from '../services/weather';

import { KelvinCelsiusPipe } from '../pipes/kc';
import { LocalDatePipe } from '../pipes/local-date';
import { LocalTimePipe } from '../pipes/local-time';
import { TimePipe } from '../pipes/time-pipe';
import { WindDirPipe } from '../pipes/wind-dir'
import { WindSpeedPipe } from '../pipes/wind-speed'

import { ForecastDayComponent } from '../components/forecast-day/forecast-day';
import { ForecastItemComponent } from '../components/forecast-item/forecast-item';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddPlacePage,    
    KelvinCelsiusPipe,
    LocalDatePipe,
    LocalTimePipe,    
    TimePipe,
    WindDirPipe,
    WindSpeedPipe,
    ForecastItemComponent,
    ForecastDayComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddPlacePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    GeoCodeService,
    WeatherService
    ]
})
export class AppModule {}
