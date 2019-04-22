import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../../models/users';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(environment.apiUrlUsers);
  }

  public addUser(userDetails: Users) {
    return this.http.post<Users>(
      environment.apiUrlUsers + '/addUser',
      userDetails
    );
  }

  public deleteUser(userId: number) {
    return this.http.post(
      environment.apiUrlUsers + '/deleteUser/' + userId,
      {}
    );
  }
}
