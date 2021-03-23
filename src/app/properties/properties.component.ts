import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../services/properties.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss'],
})
export class PropertiesComponent implements OnInit {
  properties: any; // list of properties
  filteredList = [];

  order = 0;

  priceOptions = [];
  minPrice = 0;
  maxPrice = 0;

  constructor(private _propertiesService: PropertiesService) {}

  ngOnInit(): void {
    this.properties = this._propertiesService.houseData;
    this.filteredList = this.properties.slice();

    // populate price options
    for (let price = 0; price <= 1e6; price += 25000) {
      this.priceOptions.push(price);
    }
  }

  /**
   * sort by price
   */
  sortByPrice() {
    this.order++;

    const mhsort = (a, b) => {
      return a.Price - b.Price;
    };

    this.filterList();

    switch (this.order) {
      case 1: {
        this.filteredList = this.filteredList.sort(mhsort);
        break;
      }
      case 2: {
        this.filteredList = this.filteredList.sort(mhsort).reverse();
        break;
      }
      default: {
        this.order = 0;
        this.filteredList = this.properties.slice();
      }
    }
  }

  /**
   * Filter properties
   */
  filterList() {
    if (this.minPrice != 0 || this.maxPrice != 0) {
      this.filteredList = this.properties.filter((p) => {
        return p.Price >= this.minPrice && p.Price <= this.maxPrice;
      });
    } else {
      this.filteredList = this.properties.slice();
    }
  }

  /**
   * Resets filter
   */
  resetFilter() {
    this.order = 0;
    this.minPrice = 0;
    this.maxPrice = 0;
    this.filterList();
  }

  // TODO: create utils service

  /**
   * To handle if the img doesn't exist
   * @param err ErrorEvent
   * @param index index of item
   * @param isMainPhoto whether it is a main photo or not
   */
  updateUrl(err: ErrorEvent, index: number, isMainPhoto: boolean) {
    // TODO: create global error handler
    console.error(err);
    const photoToUpdate = isMainPhoto ? 'MainPhoto' : 'GroupLogoUrl';
    this.filteredList[index][photoToUpdate] =
      'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg';
  }

  isNumber(val): boolean {
    return typeof val === 'number';
  }
}
