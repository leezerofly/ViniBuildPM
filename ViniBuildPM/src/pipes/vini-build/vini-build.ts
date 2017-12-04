import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ViniBuildPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'viniBuild',
})
export class ViniBuildPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    value = "viniBuild" + value;
    return value.toLowerCase();
  }
}
