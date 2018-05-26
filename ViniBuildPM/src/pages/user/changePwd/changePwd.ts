import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'changePwd',
  templateUrl: 'changePwd.html'
})
export class ChangePwd {
  
  passwordDis1:boolean=true;
  passwordDis2:boolean=false
  passwordDis3:boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alerCtrl: AlertController
  ) { }

  toSecondStep() {
    this.passwordDis1=false;
    this.passwordDis2=true;
  }
  
  toThirdStep() {
    this.passwordDis2=false;
    this.passwordDis3=true;
  }
  
  returnFirstStep() {
    this.passwordDis1=true;
    this.passwordDis2=false;
  }
  
  toForthStep() {
    this.passwordDis1=true;
    this.passwordDis3=false;
  }


  doConfirm() {
    let confirm = this.alerCtrl.create({
      // title: 'Use this lightsaber?',
      message: '确认修改密码？',
      buttons: [
        {
          text: '确认',
          handler: () => {
            this.passwordDis2=false;
            this.passwordDis3=true;
          }
        },
        {
          text: '取消',
          handler: () => {
            this.passwordDis1=true;
            this.passwordDis2=false;
          }
        }
      ]
    });
    confirm.present()
  }

}