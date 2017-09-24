import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../auth/shared/auth.service";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user$: Observable<any>;
  userTest:any;
  constructor(
    private authService: AuthService
  ) { 
    this.user$ = this.authService.user$;
  }
  ngOnInit() {
    var users = {userName: "Scott", password: "123"}
    this.authService.login(users).subscribe(data => {
      this.userTest = data;
       this.authService.loginx(data);
    })
  }

}
