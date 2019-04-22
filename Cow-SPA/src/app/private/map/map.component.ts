import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() marker = [];

  zoom: number;
  defaultLat: number;
  defaultLng: number;
  // marker: any[];

  constructor() {}

  ngOnInit() {
    this.mapConfig();
  }

  mapConfig() {
    this.zoom = 2;
    this.defaultLat = 52.379189;
    this.defaultLng = 4.899431;
  }
}
