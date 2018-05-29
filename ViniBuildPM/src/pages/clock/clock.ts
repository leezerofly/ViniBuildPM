import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the ClockPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var BMap;
declare var BMAP_STATUS_SUCCESS;

@IonicPage()
@Component({
  selector: 'page-clock',
  templateUrl: 'clock.html',
})
export class ClockPage {
  @ViewChild('map') map_container: ElementRef;
  map: any;//地图对象
  marker: any;//标记
  geolocation1: any;
  myIcon: any;

  time1: any;
  time2: any; 
  type : string = "上班打卡";
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alerCtrl: AlertController, private geolocation: Geolocation) {
    this.myIcon = new BMap.Icon("assets/icon/favicon.ico", new BMap.Size(30, 30));
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
    if (this.type == "上班打卡")
      this.type = "下班打卡";
    else 
      this.type = "上班打卡";
    alert.present()
  }
  ionViewDidEnter() {
    let map =
      this.map =
      new BMap.Map(
        this.map_container.nativeElement,
        {
          enableMapClick: true,//点击拖拽
          enableScrollWheelZoom: true,//启动滚轮放大缩小，默认禁用
          enableContinuousZoom: true //连续缩放效果，默认禁用
        }
      );//创建地图实例
    // map.centerAndZoom("广州",17); //设置城市设置中心和地图显示级别
    // map.addControl(new BMap.MapTypeControl());//地图类型切换
    // map.setCurrentCity("广州"); //设置当前城市
    let point = new BMap.Point(113.38028471135, 23.129702256122);//坐标可以通过百度地图坐标拾取器获取
    let marker = new BMap.Marker(point);
    this.map.addOverlay(marker);
    map.centerAndZoom(point, 18);//设置中心和地图显示级别
    // let sizeMap = new BMap.Size(10, 80);//显示位置
    // map.addControl(new BMap.NavigationControl());
    // let myIcon = new BMap.Icon("assets/icon/favicon.ico", new BMap.Size(300, 157));
    // let marker = this.marker = new BMap.Marker(point, { icon: myIcon });
    // map.addOverlay(marker);
  }

  getLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      let locationPoint = new BMap.Point(resp.coords.longitude, resp.coords.latitude);
      let convertor = new BMap.Convertor();
      let pointArr = [];
      pointArr.push(locationPoint);
      convertor.translate(pointArr, 1, 5, (data) => {
        if (data.status === 0) {
          let marker = this.marker = new BMap.Marker(data.points[0], { icon: this.myIcon });
          this.map.panTo(data.points[0]);
          marker.setPosition(data.points[0]);
          this.map.addOverlay(marker);
        }
      })
      console.log('GPS定位：您的位置是 ' + resp.coords.longitude + ',' + resp.coords.latitude);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClockPage');
  }

  //openCalendarPage() {
  //  this.navCtrl.push(CalendarPage);
  //}

}

