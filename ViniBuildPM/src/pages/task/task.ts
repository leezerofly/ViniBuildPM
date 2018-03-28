import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//数据请求导入文件
import {Http,Response,Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/toPromise';
// import {Observable} from "rxjs";
import "rxjs/Rx";

@IonicPage()
@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {
  //定义网络请求数据
  homeListDate = {
    'title':''

  };
  title: string = '任务'

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:Http) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad TaskPage');
  // }

  ionViewDidLoad(){                             //网络请求函数
    let _this = this;
    var url = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1"
    this.http.get(url).map(res => res.json()).subscribe(
          function(data){
            _this.homeListDate = data;
          },function (error){
               console.log(error);
            }      
      //  data => {console.log(data);}
        );
    // console.log(this.homeListDate);
  }

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

}
