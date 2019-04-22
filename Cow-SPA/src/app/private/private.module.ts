import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UsersCardsComponent } from './users/users-cards/users-cards.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { MainViewComponent } from './main-view/main-view.component';
import { MapComponent } from './map/map.component';

import { AgmCoreModule } from '@agm/core';
import { environment } from '../../environments/environment';
import { AddressCreateComponent } from './address-create/address-create.component';

@NgModule({
  declarations: [
    UsersCardsComponent,
    UsersListComponent,
    MainViewComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapApiKey
    })
  ],
  exports: []
})
export class PrivateModule {}
