import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { NavController } from 'ionic-angular';

import { WeatherService } from '../../services/weather';

@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html'
})
export class AddPlacePage implements OnInit {

  placeForm: FormGroup;

  constructor(private weatherService: WeatherService, private navCtrl: NavController) {}

  // ----------------------------------------------------------------------
  ngOnInit() {

    this.initForm();

  }

  // ----------------------------------------------------------------------
  onSubmit() {

    this.weatherService.setPlace(this.placeForm.value.place);
    this.navCtrl.pop();

  }

  // ----------------------------------------------------------------------
  private initForm() {

    this.placeForm = new FormGroup({
      'place': new FormControl(this.weatherService.getPlace(), Validators.required)
    });

  }  

}
