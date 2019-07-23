import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "/api/auth";

  constructor(private http: HttpClient) { }

  loginUser(user)
  {
      return this.http.post(this.url+"/signin", user);
  }
  retisterUser(user)
  {
      return this.http.post(this.url+"/signup", user);
  }
}
