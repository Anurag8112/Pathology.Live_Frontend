import { Component, Input } from '@angular/core';
import { Router,NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() sideNavStatus: boolean =false;

  activeItem: number = -1;

  list=[
    {
      number: '1',
      name: 'Dashboard',
      icon: 'fa-solid fa-house',
      url: '/dashboard'
    },
    {
      number: '2',
      name: 'Analytics',
      icon: 'fa fa-line-chart',
      url: '/analytics'
    },
    {
      number: '3',
      name: 'Reports',
      icon: 'fa-solid fa-file-medical',
      url: '/reports'
    },
    {
      number: '4',
      name: 'Doctor',
      icon: 'fa-solid fa-user-doctor',
      url: '/doctor'
    },
    {
      number: '5',
      name: 'Hospital',
      icon: 'fa-solid fa-hospital',
      url: '/hospital'
    },
    {
      number: '6',
      name: 'Phlebotomist',
      icon: 'fa-solid fa-syringe',
      url: '/phlebotomist'
    },
    {
      number: '7',
      name: 'Lab Technichian',
      icon: 'fas fa-microscope',
      url: '/lab-technician'
    },
    {
      number: '8',
      name: 'Finance',
      icon: 'fa-solid fa-coins',
      url: '/finance'
    },
  ]

  constructor(private router: Router) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.setActiveItem();
      });
  }

  private setActiveItem(): void {
    const currentUrl = this.router.url;
    this.activeItem = this.list.findIndex(item => item.url === currentUrl);
    console.warn(currentUrl);
    
  }
  ngOnInit(): void{}
}
