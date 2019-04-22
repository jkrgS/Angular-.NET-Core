import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UsersApiService } from 'src/app/_services/api-services/users-api.service';
import { HttpClient } from '@angular/common/http';
import { google } from '@agm/core/services/google-maps-types';
import { AddressApiService } from '../../_services/api-services/address-api.service';

@Component({
  selector: 'app-address-create',
  templateUrl: './address-create.component.html',
  styleUrls: ['./address-create.component.css']
})
export class AddressCreateComponent implements OnInit {
  form: FormGroup;
  geocoder: any;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddressCreateComponent>,
    private usersApiService: UsersApiService,
    private addressesApiService: AddressApiService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      userId: [this.data.userId, Validators.required],
      street: ['', Validators.required],
      streetNumber: ['', Validators.required],
      postCode: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      longitude: ['', Validators.required],
      latitude: ['', Validators.required]
    });
  }

  closeModal() {
    this.dialogRef.close();
  }

  // getAddress(address: string) {
  //   if (!this.geocoder) {
  //   }
  //   this.geocoder = new google.maps.Geocoder();
  //   this.geocoder.geocode(
  //     {
  //       address: address
  //     },
  //     (results: any, status: any) => {
  //       console.log(results);
  //       if (status === google.maps.GeocoderStatus.OK) {
  //         // decompose the result
  //       } else {
  //         alert('Sorry, this search produced no results.');
  //       }
  //     }
  //   );
  // }

  save() {
    this.addressesApiService.addAddress(this.form.value).subscribe(x => {
      this.dialogRef.close({ data: { reload: true } });
    });
  }
}
