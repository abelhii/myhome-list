import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mh-button',
  templateUrl: './mh-button.component.html',
  styleUrls: ['./mh-button.component.scss'],
})
export class MhButtonComponent implements OnInit {
  @Input() btnColor: String;

  constructor() {}

  ngOnInit(): void {}
}
