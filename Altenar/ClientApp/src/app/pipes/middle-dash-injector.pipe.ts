import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'middleDashInjector'
})
export class MiddleDashInjectorPipe implements PipeTransform {

  transform(value: string): any {

    return value.split(" ").join("-");
  }

}
