import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menustatus:boolean =true;
  
  constructor(private router: Router) {}
  
  ngOnInit(): void {}

  SideNavToggle(){
    this.menustatus = !this.menustatus; 
    this.sideNavToggled.emit(this.menustatus);
  }

}
