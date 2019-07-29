import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "/api/auth";

  constructor(private http: HttpClient) { }

  loginUser(user):Observable<any>
  {
      return this.http.post<Observable<any>>(this.url+"/signin", user);
  }
  registerUser(user)
  {
      return this.http.post(this.url+"/signup", user);
  }

  loadData()
  {
    return this.http.get<Array<StockInterface>>("https://angular2-in-action-api.herokuapp.com/stocks/snapshot?symbols=aapl,goog,fb");
  }
}

export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  shangeInPerecent: number;
}
