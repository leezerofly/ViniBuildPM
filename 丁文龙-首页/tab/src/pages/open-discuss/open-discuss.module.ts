import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenDiscussPage } from './open-discuss';

@NgModule({
  declarations: [
    OpenDiscussPage,
  ],
  imports: [
    IonicPageModule.forChild(OpenDiscussPage),
  ],
})
export class OpenDiscussPageModule {}
