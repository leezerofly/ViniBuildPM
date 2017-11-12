import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { 会议Page } from './会议';

@NgModule({
  declarations: [
    会议Page,
  ],
  imports: [
    IonicPageModule.forChild(会议Page),
  ],
})
export class 会议PageModule {}
