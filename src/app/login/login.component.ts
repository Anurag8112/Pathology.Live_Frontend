import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {

  @Output() loginStatus = new EventEmitter<boolean>();
  loginstatus:boolean =true;

  constructor(private router: Router) {}

  onLoginButtonClick(): void {
    
    this.loginstatus = false; 
    this.router.navigate(['/dashboard']);
    this.loginStatus.emit(this.loginstatus);
  }

}
