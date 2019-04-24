import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import { ToastController } from '@ionic/angular';
import {DataService} from '../../services/data.service';
import {Router} from "@angular/router";
import {CityService} from '../../services/city.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss','../../res/fonts/util.css','../../res/vendor/bootstrap/css/bootstrap.min.css','../../res/fonts/font-awesome-4.7.0/css/font-awesome.min.css',
    '../../res/fonts/iconic/css/material-design-iconic-font.min.css','../../res/vendor/animate/animate.css','../../res/vendor/css-hamburgers/hamburgers.min.css', '../../res/vendor/animsition/css/animsition.min.css',
    '../../res/vendor/select2/select2.min.css','../../res/vendor/daterangepicker/daterangepicker.css']
})
export class FormComponent implements OnInit {

  cityForm: FormGroup;
  validation_messages: any;
  aqi: any;

  constructor(private data: DataService,public toastController: ToastController,private formBuilder: FormBuilder,
              private router: Router,private cityService:CityService) {
    this.cityForm = this.formBuilder.group({
          city: new FormControl('', Validators.compose([
            Validators.required,
            Validators.pattern(/.{0,50}$/)])),
        }
    );
  }

  ngOnInit() {
    document.body.classList.add('bg-img');
    this.validation_messages = {
      'city': [
        { type: 'required', message: 'Ciudad: Requerida'},
        { type: 'pattern', message: 'Ciudad: Debe contener menos de 50 caracteres' }
      ]}
  }

 obtenerInfo() {
    this.data.getAqiStation(this.cityForm.value.city).subscribe(async data =>{
      this.aqi=data
      console.log(this.aqi.status)
      if(this.aqi.status=="error")
      {
        const toast = await this.toastController.create({
          message: 'No existe ninguna estación con este nombre',
          duration: 2000,
          position: 'bottom',
        });
        toast.present();
      }
      else{
        this.cityService.changeAqi(this.aqi)
        this.router.navigateByUrl("contamination");
      }
    });

  }



}
