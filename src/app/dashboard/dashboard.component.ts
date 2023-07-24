import { Component } from '@angular/core';
import { DashboardDataService } from '../services/dashboard-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  dashboardData :any;
  recentReports :any;
  activeTab: string = 'today';
  constructor(private dashboard:DashboardDataService)
  {
    dashboard.dashboard(1).subscribe((data)=>{
      this.dashboardData=data
    });

    dashboard.recentReports(10,1).subscribe((reports)=>{
      this.recentReports=reports
      console.warn(this.recentReports);
    });
  }

selectedItemsPerPage: number = 10; // Default value for items per page
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

  isNegativePercentage(percentage: number): boolean {
    return percentage < 0;
  }

  onClickToday() {
    this.activeTab = 'today';
    // Call the dashboard() method with parameter 1 for "Today"
    this.dashboard.dashboard(1).subscribe((data) => {
      console.warn('Data', data);
      this.dashboardData = data;
    });
  }

  onClickThisWeek() {
    this.activeTab = 'thisWeek';
    // Call the dashboard() method with parameter 2 for "This Week"
    this.dashboard.dashboard(2).subscribe((data) => {
      console.warn('Data', data);
      this.dashboardData = data;
    });
  }

  onClickThisMonth() {
    this.activeTab = 'thisMonth';
    // Call the dashboard() method with parameter 3 for "This Month"
    this.dashboard.dashboard(3).subscribe((data) => {
      console.warn('Data', data);
      this.dashboardData = data;
    });
  }
}
