import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {

  transform(contents: Content[], typeFilter?: string): Content[] {
    if(!typeFilter){
      return contents.filter(content => !content.type);
    }

    return contents.filter(content => content.type === typeFilter);
  }

}
