import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class CommonService {
  public headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(public http: Http) {

  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  clearToken() {
    localStorage.removeItem('token');
  }



}
