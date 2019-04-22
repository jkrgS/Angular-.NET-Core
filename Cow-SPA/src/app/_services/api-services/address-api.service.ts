import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Addresses } from '../../models/addresses';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressApiService {
  constructor(private http: HttpClient) {}

  public addAddress(addressDetails: Addresses) {
    return this.http.post<Addresses>(
      environment.apiUrlAddresses + '/addAddress',
      addressDetails
    );
  }
}
