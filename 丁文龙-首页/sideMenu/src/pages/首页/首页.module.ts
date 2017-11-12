import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { 首页Page } from './首页';

@NgModule({
  declarations: [
    首页Page,
  ],
  imports: [
    IonicPageModule.forChild(首页Page),
  ],
})
export class 首页PageModule {}
