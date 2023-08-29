import { Component } from '@angular/core';
import { DashboardDataService } from '../services/dashboard-data.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent {
  recentReports :any;
  constructor(private dashboard:DashboardDataService)
  {
    dashboard.recentReports(10,1).subscribe((reports)=>{
      this.recentReports=reports
      console.warn(this.recentReports);
    });
  }

  selectedItemsPerPage: number = 10; 
  currentPage: number = 1;
  totalItems: number = 100;

  recentReportsData() {
    this.dashboard.recentReports(this.selectedItemsPerPage,this.currentPage).subscribe((reports) => {
      this.recentReports = reports;
      console.warn(this.recentReports);
    });
  }

  onClickLeft() {
    if(this.currentPage!=1){
      this.currentPage--;
      this.recentReportsData();
    }
  }

  onClickRight() {
      this.currentPage++;
      this.recentReportsData();
  }
  onItemsPerPageChange() {
    this.recentReportsData(); // Call the recentReportsData() function with the selected value
  }
}
