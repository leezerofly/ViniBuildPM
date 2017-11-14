import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { 问题Page } from './问题';

@NgModule({
  declarations: [
    问题Page,
  ],
  imports: [
    IonicPageModule.forChild(问题Page),
  ],
})
export class 问题PageModule {}
