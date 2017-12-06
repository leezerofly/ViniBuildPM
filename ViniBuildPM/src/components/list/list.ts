import { Component, Input } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: 'list.html'
})
export class ListComponent {

  @Input() items: any

  constructor() {
  }

  itemSelected(item: string) {
    console.log("Selected Item", item)
  }

}
