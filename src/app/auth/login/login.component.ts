import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from "../shared/auth.service"
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: boolean;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.error = false;
  }

  ngOnInit() {
  }

  login(user) {
    this.authService.login(user).subscribe(data => {
      this.authService.loginTest(data);
      this.authService.setUserLoggedIn();
      //this.authService.loginx(data);
      this.router.navigate(['/dashboard', 'product',])
    }, () => {
      this.error = true;

    })


  }

  errorType(type) {
    this.error = type;
  }

}
