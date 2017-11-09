import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalDataPage } from './personalData';

@NgModule({
  declarations: [
    PersonalDataPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalDataPage),
  ],
})
export class PersonalDataPageModule {}
