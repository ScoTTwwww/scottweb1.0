import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from "../../auth/shared/auth.service"
@Injectable()
export class AuthguardGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    return this.xxx();
  }

  xxx() {
    let check: boolean = true;

    if (this.authService.isUserLoggedIn == false) {
      this.router.navigate(['/']);
      check = false;
    }
    return check
  }
}
