import { Injectable } from '@angular/core';

import HouseData from '@assets/house-data.json';

@Injectable({
  providedIn: 'root',
})
export class PropertiesService {
  houseData = HouseData.SearchResults;

  constructor() {}

  /**
   * Get property by id
   * @param id if string, parse it into an int
   * @returns property object
   */
  getPropertyById(id: number | string) {
    if (typeof id === 'string') id = Number(id) || 0;
    return this.houseData.find((p) => p.PropertyId === id);
  }
}
