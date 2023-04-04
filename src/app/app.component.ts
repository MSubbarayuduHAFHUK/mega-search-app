import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MegaSearchResult, searchResult} from '../data/sampleDB';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mega-serch-app';
  myControl = new FormControl('');
  // options: string[] = ['One', 'Two', 'Three'];
  options: MegaSearchResult[] = searchResult;
}
