import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { 任务Page } from './任务';

@NgModule({
  declarations: [
    任务Page,
  ],
  imports: [
    IonicPageModule.forChild(任务Page),
  ],
})
export class 任务PageModule {}
