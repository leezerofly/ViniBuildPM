import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
// import { AppProvider, AppGlobal } from '../../providers/app/app';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title: string = '首页'
  items:any = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
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



  constructor(public navCtrl: NavController) {}
    
   

}
