import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/filter';
 import { AuthService } from "./auth/shared/auth.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(private router: Router,
   private authService: AuthService,) {
     
  };
}
