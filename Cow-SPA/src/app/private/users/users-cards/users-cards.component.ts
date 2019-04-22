import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { Users } from '../../../models/users';
import { Addresses } from '../../../models/addresses';
import { Subscription } from 'rxjs';
import { MapArrayUserCards } from '../../../helpers/map-array';
import { UsersApiService } from 'src/app/_services/api-services/users-api.service';
import { MatDialog } from '@angular/material';
import { AddressCreateComponent } from '../../address-create/address-create.component';

@Component({
  selector: 'app-users-cards',
  templateUrl: './users-cards.component.html',
  styleUrls: ['./users-cards.component.css']
})
export class UsersCardsComponent implements OnInit, OnDestroy {
  @Input() user: Users;
  @Output() mapGeo = new EventEmitter<any[]>();
  @Output() reloadUserList = new EventEmitter<boolean>();

  mapGeoData = [];
  sub: Subscription[];
  mapButton = false;

  constructor(
    private usersApiService: UsersApiService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.sub = this.mapGeoData;
  }

  mapGeoTrigger(addresses: Addresses[]) {
    this.mapGeoData = [];
    this.mapButton = !this.mapButton;

    if (addresses) {
      this.mapGeoData = MapArrayUserCards(
        addresses,
        this.mapGeoData,
        this.mapButton
      );

      this.mapGeo.emit(this.mapGeoData);
    }
  }

  createAddress(userId: number, userName: string) {
    const dialogRef = this.dialog.open(AddressCreateComponent, {
      data: { userId: userId, userName: userName }
    });

    dialogRef
      .afterClosed()
      .subscribe(x => (x.data.reload ? this.reloadUserList.emit() : false));
  }

  deleteUser(userId: number) {
    this.usersApiService.deleteUser(userId).subscribe(() => {
      this.reloadUserList.emit();
    });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.forEach(s => s.unsubscribe);
    }
  }
}
