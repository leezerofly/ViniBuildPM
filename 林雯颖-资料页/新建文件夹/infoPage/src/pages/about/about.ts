import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

constructor(public alerCtrl: AlertController,public navCtrl: NavController) {

}


doAlert() {
  let alert = this.alerCtrl.create({
    title: '提示',
    message: '修改成功!',
    buttons: ['Ok']
  });
  alert.present()
}

}
