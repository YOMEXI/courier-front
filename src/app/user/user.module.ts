import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { GoogleMapsModule } from '@angular/google-maps';

import { UserRoutingModule } from './user-routing.module';
import { ParcelComponent } from './parcel/parcel.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ParcelComponent],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    NgxPaginationModule,
    GoogleMapsModule,
    HttpClientModule,
  ],
  exports: [ParcelComponent],
})
export class UserModule {}
