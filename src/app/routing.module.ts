import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NextpageComponent } from './nextpage/nextpage.component';
import { AttendanceComponent } from './attendance/attendance.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'NextPage' , component: NextpageComponent},
    { path: 'attendance' , component: AttendanceComponent},
    { path: '', component: LoginComponent },
    { path: '**', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RoutingModule { }
export const routingComponents = [LoginComponent, NextpageComponent,AttendanceComponent];
