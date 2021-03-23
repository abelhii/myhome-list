import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertiesService } from 'src/app/services/properties.service';

@Component({
  selector: 'app-brochure',
  templateUrl: './brochure.component.html',
  styleUrls: ['./brochure.component.scss'],
})
export class BrochureComponent implements OnInit {
  brochure: any;

  constructor(
    private route: ActivatedRoute,
    private _propertiesService: PropertiesService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.brochure = this._propertiesService.getPropertyById(id);
  }
}
