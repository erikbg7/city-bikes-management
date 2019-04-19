import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss', '../../res/fonts/util.css', '../../res/vendor/bootstrap/css/bootstrap.min.css', '../../res/fonts/font-awesome-4.7.0/css/font-awesome.min.css',
    '../../res/fonts/iconic/css/material-design-iconic-font.min.css', '../../res/vendor/animate/animate.css', '../../res/vendor/css-hamburgers/hamburgers.min.css', '../../res/vendor/animsition/css/animsition.min.css',
    '../../res/vendor/select2/select2.min.css', '../../res/vendor/daterangepicker/daterangepicker.css'
  ]
})
export class ListPage implements OnInit {

  users: Object;

  constructor(private data: DataService, public toastController: ToastController) { }

  ngOnInit() {
  }

  obtenerUsuarios(){
    console.log("Boto Apretat")
    this.data.getUsers()
        .subscribe(async response => {
                if (response.status == 200) {
                    this.users = response.body;
                    console.log(this.users)
                    const toast = await this.toastController.create({
                        message: 'Usuaris Obtinguts',
                        duration: 2000,
                        position: 'bottom',
                    });
                    toast.present();
                } else {
                    //Error desconegut
                    console.log(response);
                    const toast = await this.toastController.create({
                        message: 'Error del Backend',
                        duration: 2000,
                        position: 'bottom',
                    });
                    toast.present();
                }
            },
            async err => {
                console.log("Error del BackEnd" + err);
                const toast = await this.toastController.create({
                    message: 'Error del Backend',
                    duration: 2000,
                    position: 'bottom',
                });
                toast.present();
            });
  }

}
