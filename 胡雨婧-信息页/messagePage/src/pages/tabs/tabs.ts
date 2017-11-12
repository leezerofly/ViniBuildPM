import { Component } from '@angular/core';

import { MessagePage } from '../message/message';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MessagePage;

  constructor() {

  }
}
