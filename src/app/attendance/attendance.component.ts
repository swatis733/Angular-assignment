import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  constructor(private service: UserService) { }

  ngOnInit() {
    this.getAttendance();
  }
  allDates: any = [] ;
  dates: any = [];

  getAttendance() {
    this.service.getAttendance().subscribe(res => {
      console.log(res); // For Testing purpose only
      this.allDates = (JSON.parse(res.text())).body;
    });
  }

}


