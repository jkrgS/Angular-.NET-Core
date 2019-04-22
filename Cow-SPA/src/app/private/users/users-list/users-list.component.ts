import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
  Input
} from '@angular/core';
import { UsersApiService } from '../../../_services/api-services/users-api.service';
import { Users } from '../../../models/users';
import { Subscription } from 'rxjs';
import { MapArrayUserList } from '../../../helpers/map-array';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy {
  @Output() mapGeo = new EventEmitter<any[]>();
  @Input() refreshInput: boolean;

  users: Users[];
  mapGeoDT = new Array();
  sub: Subscription[];

  constructor(private usersApiService: UsersApiService) {}

  ngOnInit() {
    this.sub = this.mapGeoDT;
    this.initComponent();
  }

  initComponent() {
    this.getUsers();
  }

  getUsers() {
    this.usersApiService.getUsers().subscribe(res => {
      this.users = res as Users[];
    });
  }

  mapTrigger(mapGeoData: any[]) {
    if (mapGeoData) {
      this.mapGeoDT = MapArrayUserList(mapGeoData, this.mapGeoDT); // function helper

      this.mapGeo.emit(this.mapGeoDT);
    }
  }

  refresh() {
    this.getUsers();
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.forEach(s => s.unsubscribe);
    }
  }
}
