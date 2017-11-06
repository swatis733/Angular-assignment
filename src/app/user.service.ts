import { Injectable } from '@angular/core';
import {Http}from '@angular/http';
@Injectable()
export class UserService {
  email= '';
  role:number;

  constructor(private http: Http) { }

  isLoggedIn() {
    return this.email === '' ? false : true ;
  }

  isAdmin() {
    return this.role === 0 ? true: false;
  }
  getuser(email){
    return this.http.get("http://localhost:4600/api/v1/getUser/"+email);
  }
  onSignup(email: string, name: string, password: string) {
    return this.http.post('http://localhost:4600/api/v1/newUser',
    ({ email : email , name: name, password: password}));
  }

  setAttendance(date: string) {
    return this.http.post('http://localhost:4600/api/v1/setattendance',
    ({email: this.email, date : date}));
  }

  getAttendance() {
    return this.http.get('http://localhost:4600/api/v1/getattendance/' + this.email);
}

}


  