import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserDTO } from '../Models/UserDTO';

@Injectable()
export class UserServiceService {

  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  RetrieveUsers() {
    return this.http.get<Array<UserDTO>>(this.baseUrl + '/users/users');
  }
  GetUser(id) {
    return this.http.get<UserDTO>(this.baseUrl + '/users/' + id);
  }
  UpdateUser(id, UpdatedUser) {
    return this.http.put(this.baseUrl + '/users/UpdateUser' + id, UpdatedUser);
  }
}
