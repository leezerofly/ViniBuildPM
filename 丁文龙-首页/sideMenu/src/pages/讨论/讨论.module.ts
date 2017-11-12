import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { 讨论Page } from './讨论';

@NgModule({
  declarations: [
    讨论Page,
  ],
  imports: [
    IonicPageModule.forChild(讨论Page),
  ],
})
export class 讨论PageModule {}
