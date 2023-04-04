import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MegaSearchResult, searchResult} from '../../data/sampleDB';

@Component({
  selector: 'app-mega-search',
  templateUrl: './mega-search.component.html',
  styleUrls: ['./mega-search.component.css']
})
export class MegaSearchComponent implements OnInit {
  
  @Input()
  result: MegaSearchResult[] | undefined;

  title = 'mega-serch-app';
  myControl = new FormControl('');

  constructor() { }

  ngOnInit() {
    console.log(this.result);
  }
}
