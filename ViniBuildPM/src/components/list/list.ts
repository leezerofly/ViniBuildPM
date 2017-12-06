import { Component } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: 'list.html'
})
export class ListComponent {

  items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
    'Street Fighter II',
    'Half Life',
    'Final Fantasy VII',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ]

  constructor() {
  }

  itemSelected(item: string) {
    console.log("Selected Item", item)
  }

}
