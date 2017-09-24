import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth/shared/auth.service";
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ToastService, ModalService } from '../shared/';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userTest: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    public modalService: ModalService,
  ) {
    this.userTest = this.authService.userTest;
  }

  ngOnInit() {



  }

  logout() {
    this.modalService.confirm('是否確定登出？', "訊息").then((result) => {
      if (result) {
        this.authService.loginOut();
        this.router.navigate(['/']);
      }
    });

  }


}
