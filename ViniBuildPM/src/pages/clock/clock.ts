import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ClockPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clock',
  templateUrl: 'clock.html',
})
export class ClockPage {
  time1: any;
  time2: any; 
  type : string = "上班打卡";

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alerCtrl: AlertController) {
    var date = new Date();
    var year = date.getFullYear();
    var month,day ;
    month = date.getMonth() + 1;
    if(month >= 1 && month <= 9){
      month = "0"+month;
      console.log(typeof (month))
    }
    day = date.getDate();
    if(day >= 0 && day <= 9){
      day = "0"+day;
    }
    var hour,minute,second;
    hour = date.getHours();
    if(hour >= 0 && hour <= 9){
      hour = "0" + hour;
      console.log(typeof (hour))
    }
    minute = date.getMinutes();
    if(minute >= 0 && minute <= 9){
      minute = "0" + minute;
      console.log(typeof (minute));
    }
    second = date.getSeconds();
    if(second >= 0 && second <= 9){
      second = "0" + second;
      console.log(typeof (second));
    }
    this.time1 = year+'-'+month+"-"+day;
    this.time2 = hour+':'+minute+':'+second;
  }

  doAlert() {
    let alert = this.alerCtrl.create({
      title: '打卡成功',
    });
    alert.present()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClockPage');
  }

}
