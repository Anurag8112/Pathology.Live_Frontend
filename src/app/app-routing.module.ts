import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HospitalComponent } from './hospital/hospital.component';
import { PhlebotomistComponent } from './phlebotomist/phlebotomist.component';
import { ReportsComponent } from './reports/reports.component';
import { FinanceComponent } from './finance/finance.component';
import { LabTechnicianComponent } from './lab-technician/lab-technician.component';
import { AddReportsComponent } from './add-reports/add-reports.component';
import { ReportListComponent } from './report-list/report-list.component';
import { AddDoctorsComponent } from './add-doctors/add-doctors.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { AddHospitalsComponent } from './add-hospitals/add-hospitals.component';
import { HospitalListComponent } from './hospital-list/hospital-list.component';
import { AddPhlebotomistsComponent } from './add-phlebotomists/add-phlebotomists.component';
import { PhlebotomistListComponent } from './phlebotomist-list/phlebotomist-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent},
  {path: 'analytics', component: AnalyticsComponent},
  {path: 'reports', component: ReportsComponent,children:[
    {
      path:'',   
      component: AddReportsComponent,
    },{
      path:'add-report',
      component: AddReportsComponent,
    },
    {
      path:'report-list',
      component: ReportListComponent
    }
  ]},

  {path: 'doctor', component: DoctorComponent,children:[
    {
      path:'',   
      component: AddDoctorsComponent,
    },{
      path:'add-doctor',
      component: AddDoctorsComponent,
    },
    {
      path:'doctor-list',
      component: DoctorListComponent
    }
  ]},

  {path: 'hospital', component: HospitalComponent,children:[
    {
      path:'',   
      component: AddHospitalsComponent,
    },{
      path:'add-hospitals',
      component: AddHospitalsComponent,
    },
    {
      path:'hospital-list',
      component: HospitalListComponent
    }
  ]},

  {path: 'phlebotomist', component: PhlebotomistComponent,children:[
    {
      path:'',   
      component: AddPhlebotomistsComponent,
    },{
      path:'add-phlebotomists',
      component: AddPhlebotomistsComponent,
    },
    {
      path:'phlebotomist-list',
      component: PhlebotomistListComponent
    }
  ]},
  {path:'lab-technician', component: LabTechnicianComponent},
  {path: 'finance', component: FinanceComponent},
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
