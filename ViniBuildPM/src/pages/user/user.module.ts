import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserPage } from './user';

import { Userinfo } from './userinfo/userinfo';
import { ChangePwd } from './changePwd/changePwd';
import { ChangeProtect } from './changeProtect/changeProtect'

@NgModule({
  declarations: [
    UserPage,
    Userinfo,
    ChangePwd,
    ChangeProtect
  ],
  imports: [
    IonicPageModule.forChild(UserPage),
  ],
  exports: [ 
    Userinfo,
    ChangePwd,
    ChangeProtect
  ]
})
export class UserPageModule {}
