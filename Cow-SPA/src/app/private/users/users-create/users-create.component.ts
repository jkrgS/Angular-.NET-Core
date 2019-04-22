import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UsersApiService } from '../../../_services/api-services/users-api.service';
import { UsersListComponent } from '../users-list/users-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {
  @ViewChild('refreshUsers') refreshUsers: UsersListComponent;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<UsersCreateComponent>,
    private usersApiService: UsersApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  closeModal() {
    this.dialogRef.close();
  }

  save() {
    this.usersApiService.addUser(this.form.value).subscribe(x => {
      this.dialogRef.close({ data: { reload: true } });
    });
  }
}
