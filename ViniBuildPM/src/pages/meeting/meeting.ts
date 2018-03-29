import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
@IonicPage()
@Component({
  selector: 'page-meeting',
  templateUrl: 'meeting.html',
})
export class MeetingPage {
  title: string = '会议'

  data:any
  items = [
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
    'Street Fighter II',
    'Half Life',
    'Final Fantasy VII',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
  }

  ionViewDidLoad() {
    var xml = new XMLHttpRequest();
    var url = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
    xml.open("GET",url,true);
    var res = {} ;
    xml.onreadystatechange = function()
    {
    if (xml.readyState==4 && xml.status==200)
      {
      res = xml.responseText;
      }
    }
    xml.send();
  }

}
