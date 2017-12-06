import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'changePwd',
  templateUrl: 'changePwd.html'
})
export class ChangePwd {
  
  passwordDis1:boolean=true;
  passwordDis2:boolean=false
  passwordDis3:boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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