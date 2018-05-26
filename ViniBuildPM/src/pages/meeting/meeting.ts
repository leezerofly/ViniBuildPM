import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import "rxjs/Rx";

@IonicPage()
@Component({
  selector: 'page-meeting',
  templateUrl: 'meeting.html',
})
export class MeetingPage {
  title: string = '会议'
  listDate = {}
  data:any
  items = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
  }

  // ionViewDidLoad() {
  //   var xml = new XMLHttpRequest();
  //   var url = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
  //   xml.open("GET",url,true);
  //   var res = {} ;
  //   xml.onreadystatechange = function()
  //   {
  //   if (xml.readyState==4 && xml.status==200)
  //     {
  //     res = xml.responseXML;
  //     }
  //   }
  //   xml.send();
  //   console.log(res); 
  // } 

  ionViewDidLoad(){                             //网络请求函数
    let _this = this;
    var url = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1"
    console.log(this.http.get(url))
    this.http.get(url).map(res => res.json()).subscribe(
          function(data){
            _this.listDate = data;
          },function (error){
               console.log(error);
            }      
      //  data => {console.log(data);}
        );
    console.log(this.listDate);
      }

      
    //打开帖子详情 暂时未创建 用登录页面代替
    detail() {
      this.navCtrl.push('LoginPage');
    }
}
