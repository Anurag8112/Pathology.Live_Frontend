import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output() loginStatus = new EventEmitter<boolean>();
  loginstatus:boolean =false;

  constructor(private router: Router) {}

  onLoginButtonClick(): void {
    this.loginstatus = true; 
    this.router.navigate(['/dashboard']);
    this.loginStatus.emit(this.loginstatus);
  }

}
