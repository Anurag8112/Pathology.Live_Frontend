import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {

  activeTab: string = 'Add-Doctor';

  onClickDoctorList() {
    this.activeTab = 'Doctor-List';
  }
  onClickaddDoctor() {
    this.activeTab = 'Add-Doctor';
  }
}
