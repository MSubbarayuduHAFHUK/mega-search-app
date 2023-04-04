import { Pipe, PipeTransform } from '@angular/core';
import {MegaSearchResult} from '../data/sampleDB'

@Pipe({
  name: 'orders'
})
export class OrdersPipe implements PipeTransform {

  transform(value:any, filterType:string): any {
    let options = [];
    if(filterType === 'recent')
    {
      for (let key in value) {
        if(value[key].isRecent)
        {
          options.push({key: value[key].displayHeading, value: value[key].displayDescription, src: value[key].icon});        
        }
      }
      return options;
    }
    else{
      for (let key in value) {
        if(value[key].resultType == filterType)
        {
          options.push({key: value[key].displayHeading, value: value[key].displayDescription, src: value[key].icon});
        }
      }
      return options;
    }
    
  }
  }

