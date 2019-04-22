import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';
import { MapComponent } from './map/map.component';
import { UsersCreateComponent } from './users/users-create/users-create.component';

const routes: Routes = [{ path: 'main/view', component: MainViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule {}
