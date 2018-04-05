import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import { LoginPage } from '../login/login'
//数据请求导入文件
import {Http} from "@angular/http";
import "rxjs/Rx";

@IonicPage()
@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {
  //定义网络请求数据
  listDate = {};
  title: string = '任务';

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:Http) {
  }


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

      // var xml = new XMLHttpRequest();
    // xml.responseType ='text';
    // var url = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
    // xml.open("GET",url,true);
    // var res = {} ;
    // xml.onreadystatechange = function()
    // {
    // if (xml.readyState==4 && xml.status==200)
    //   {
    //   res  = xml.responseText;
    //   }
    // }
    // xml.send();
    // console.log(res); 

  // ionViewDidLoad(){                           //网络请求函数
  //   var url = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1"
  //    new Promise(resolve => {this.http.get(url).subscribe(res => {
  //     this.homeListDate = res.json();
  //     });   
  //   }); 
  // }

  // ionViewDidLoad(){                             //网络请求函数
  //   this.http.request('http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1')
  //   .toPromise()
  //   .then(res => { this.homeListDate = res.json(); })
  //   .catch(err => { console.error(err) });
  // }

  
    //打开帖子详情 暂时未创建 用登录页面代替
    detail() {
      this.navCtrl.push('LoginPage');
    }


     //打开登录界面
     openLogin() {
      this.navCtrl.push('LoginPage');
    }

}
