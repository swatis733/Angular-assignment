import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nextpage',
  templateUrl: './nextpage.component.html',
  styleUrls: ['./nextpage.component.css']
})
export class NextpageComponent implements OnInit {

  constructor(private service: UserService, private router : Router) { }
  Shows = false;
  shows1 = false;
  ngOnInit() {
    
  }

onSignup(email: string, name: string, password: string) {
  this.service.onSignup(email, name, password).subscribe();  
  }
setAttendance(date: string) {
  this.service.setAttendance(date).subscribe(res => alert(JSON.parse(res.text()))); 
  }
  show() {
    this.Shows = true;
  }

  showReturns() {
    this.shows1 = true;
  }

  logout() {
    this.service.email = '';
    this.router.navigate(["/login"]);
  }

}


  

