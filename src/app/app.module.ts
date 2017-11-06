import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {UserService} from './user.service';
import { HttpModule } from '@angular/http';
import { AttendanceComponent } from './attendance/attendance.component';
import {RoutingModule,routingComponents} from './routing.module';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AttendanceComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

