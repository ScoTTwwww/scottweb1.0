import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';
import { AuthState, LOGIN, LOGOUT } from './auth.reducer';

@Injectable()
export class AuthService {

  user$: Observable<any>;
  type$: Observable<any>;
  userTest: any;
  isUserLoggedIn: any;

  private getPostsURI = 'https://scottwww.nctu.me/login'

  constructor(private http: Http,
    private store: Store<AuthState>
  ) {
    this.user$ = store.select<any>('auth').map(state => state.user);
    this.type$ = store.select<any>('auth').map(state => state.type);
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }

  getUserLoggedIn() {
   return  this.isUserLoggedIn  
  }

 loginOut(){
    this.isUserLoggedIn = false;
 }


  getPosts(): Observable<any> {
    return this.http.get(this.getPostsURI)
      .map((response: Response) => response.json());
  }


  loginx(user) {
    this.store.dispatch({
      type: LOGIN,
      payload: user
    });
  }
  loginTest(data) {
        this.isUserLoggedIn = true;
    this.userTest = data;
  }
  login(data): Observable<any> {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.getPostsURI, JSON.stringify(data), options)
      .map((response: Response) => response.json());
  }

  logout() {
    this.store.dispatch({
      type: LOGOUT
    });
  }

}
