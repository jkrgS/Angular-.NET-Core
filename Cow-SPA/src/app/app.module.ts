import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PrivateModule } from './private/private.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsersApiService } from './_services/api-services/users-api.service';
import { HttpErrorInterceptor } from './helpers/Interceptors/http-error.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, PrivateModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
