import { Component, Input } from '@angular/core';
import { App, MenuController, NavController } from 'ionic-angular';

@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuComponent {
  // @Input() title: string;
  constructor(app: App,public menuCtrl: MenuController) {
    menuCtrl.enable(true);
  }

  openMenu() {
    this.menuCtrl.open();
  }

  closeMenu() {
    this.menuCtrl.close();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }
}