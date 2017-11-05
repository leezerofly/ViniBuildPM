import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';


@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  pet: string = "puppies";
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}
