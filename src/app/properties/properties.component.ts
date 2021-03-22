import { Component, OnInit } from '@angular/core';
import houseData from '@assets/house-data.json';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss'],
})
export class PropertiesComponent implements OnInit {
  properties = houseData.SearchResults;

  constructor() {}

  ngOnInit(): void {
    console.log(this.properties);
  }

  updateUrl(src: ErrorEvent, index: number) {
    console.log(src);
    this.properties[index].MainPhoto = 'https://source.unsplash.com/random';
  }
}
