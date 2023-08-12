import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HospitalComponent } from './hospital/hospital.component';
import { PhlebotomistComponent } from './phlebotomist/phlebotomist.component';
import { LabTechnicianComponent } from './lab-technician/lab-technician.component';
import { FinanceComponent } from './finance/finance.component';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { AddReportsComponent } from './add-reports/add-reports.component';
import { ReportListComponent } from './report-list/report-list.component';
import { AddDoctorsComponent } from './add-doctors/add-doctors.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { AddHospitalsComponent } from './add-hospitals/add-hospitals.component';
import { HospitalListComponent } from './hospital-list/hospital-list.component';
import { AddPhlebotomistsComponent } from './add-phlebotomists/add-phlebotomists.component';
import { PhlebotomistListComponent } from './phlebotomist-list/phlebotomist-list.component';
import { LoginComponent } from './login/login.component'; 
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    ReportsComponent,
    AnalyticsComponent,
    DoctorComponent,
    HospitalComponent,
    PhlebotomistComponent,
    LabTechnicianComponent,
    FinanceComponent,
    AddReportsComponent,
    ReportListComponent,
    AddDoctorsComponent,
    DoctorListComponent,
    AddHospitalsComponent,
    HospitalListComponent,
    AddPhlebotomistsComponent,
    PhlebotomistListComponent,
    LoginComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatStepperModule,
    MatDatepickerModule,
    MatSelectModule,
    NgChartsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


