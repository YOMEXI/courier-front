import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-parcel',
  templateUrl: './parcel.component.html',
  styleUrls: ['./parcel.component.scss'],
})
export class ParcelComponent implements OnInit {
  weight = 0;
  cost = 0;
  quote = 20;
  showMenu = false;
  apiLoaded: Observable<boolean>;
  ShowMap = false;

  p: number = 1;
  collection: any[] = [
    {
      trackId: '5555555',
      location: 'canada',
      destination: 'Texas',
      cost: 300,
      weight: 33,
      status: 'pending',
    },
    {
      trackId: '5555555',
      location: 'canada',
      destination: 'Texas',
      cost: 300,
      weight: 33,
      status: 'pending',
    },
    {
      trackId: '4445555',
      location: 'china',
      destination: 'seoul',
      cost: 300,
      weight: 33,
      status: 'pending',
    },
  ];

  mapOptions: google.maps.MapOptions = {
    center: { lat: 38.9987208, lng: -77.2538699 },
    zoom: 4,
  };
  marker = {
    position: { lat: 38.9987208, lng: -77.2538699 },
  };

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient
      .jsonp(
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyAcaYXPSJ7fU-Gx-ruvYNwzhR1vJ8aMm3I',
        'callback'
      )
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }

  ngOnInit(): void {}

  convert() {
    if (this.weight > 0) {
      this.cost = this.weight * this.quote;
      console.log(this.cost);
    }
  }

  showMenus() {
    this.showMenu = !this.showMenu;
  }

  showMap() {
    this.ShowMap = !this.ShowMap;
  }
}
