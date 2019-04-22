import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { UsersCreateComponent } from '../users/users-create/users-create.component';
import { UsersListComponent } from '../users/users-list/users-list.component';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit, OnDestroy {
  mapGeoDT = [];
  sub: Subscription[];
  openModal = false;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.sub = this.mapGeoDT;
  }

  mapLngLat(mapGeo: any[]) {
    this.mapGeoDT = mapGeo;
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.forEach(s => s.unsubscribe);
    }
  }

  openDialogCreateUser() {
    const dialogRef = this.dialog.open(UsersCreateComponent, {
      height: '300px',
      width: '300px'
    });
  }
}
