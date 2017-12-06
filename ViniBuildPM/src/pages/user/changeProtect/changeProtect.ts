import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'changeProtect',
  templateUrl: 'changeProtect.html'
})
export class ChangeProtect {

  tokenDis1:boolean=true
  tokenDis2:boolean=false
  tokenDis3:boolean=false
  sel0: string[]
  sel1: string[]
  sel2: string[]
  sel3: string[]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sel0=["选择密保问题","身高","体重","家乡","家庭住址","父亲名字","母亲名字"]
    this.sel1=["选择密保问题1","身高","体重","家乡","家庭住址","父亲名字","母亲名字"]
    this.sel2=["选择密保问题2","身高","体重","家乡","家庭住址","父亲名字","母亲名字"]
    this.sel3=["选择密保问题3","身高","体重","家乡","家庭住址","父亲名字","母亲名字"]
  }

  doSecondStep(){
    this.tokenDis1=false;
    this.tokenDis2=true;
  }

  doThirdStep(){
    this.tokenDis2=false;
    this.tokenDis3=true;
  }

  returnFirstStep(){
    this.tokenDis1=true;
    this.tokenDis2=false;
  }

  doForthStep(){
    this.tokenDis1=true;
    this.tokenDis3=false;
  }
}