import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { UsersApiService } from '../_services/api-services/users-api.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpErrorInterceptor } from '../helpers/Interceptors/http-error.interceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersCreateComponent } from '../private/users/users-create/users-create.component';
import { AddressCreateComponent } from '../private/address-create/address-create.component';
import { AddressApiService } from '../_services/api-services/address-api.service';

@NgModule({
  declarations: [NavComponent, UsersCreateComponent, AddressCreateComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    NavComponent,
    UsersCreateComponent,
    AddressCreateComponent,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    UsersApiService,
    AddressApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  entryComponents: [UsersCreateComponent, AddressCreateComponent]
})
export class SharedModule {}
