import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  passwordDis1:boolean=true;
  passwordDis2:boolean=false
  passwordDis3:boolean=false;

constructor(public alerCtrl: AlertController,public navCtrl: NavController) {

}


toSecondStep() {
  this.passwordDis1=false;
  this.passwordDis2=true;
}

toThirdStep() {
  this.passwordDis2=false;
  this.passwordDis3=true;
}

returnFirstStep(){
  this.passwordDis1=true;
  this.passwordDis2=false;
}

toForthStep(){
  this.passwordDis1=true;
  this.passwordDis3=false;
}

}
