import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertiesService } from 'src/app/services/properties.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  photos: String[];
  address: String;

  constructor(
    private route: ActivatedRoute,
    private _propertiesService: PropertiesService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const property = this._propertiesService.getPropertyById(id);
    this.photos = property?.Photos;
    this.address = property?.DisplayAddress;
  }

  updateUrl(err: ErrorEvent, index: number) {
    console.error(err);
    this.photos[index] =
      'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg';
  }
}
