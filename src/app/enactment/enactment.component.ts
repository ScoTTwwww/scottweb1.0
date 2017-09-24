import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/shared/product.service';
import { Observable } from 'rxjs/Observable';
import { AuthService } from "../auth/shared/auth.service";

@Component({
  selector: 'app-enactment',
  templateUrl: './enactment.component.html',
  styleUrls: ['./enactment.component.css']
})
export class EnactmentComponent implements OnInit {
  dataLists$: Observable<any>;
  
  constructor(
    private productService: ProductService,
      private authService: AuthService
  ) { 
    this.dataLists$ = this.productService.dataLists$;
        
  }

  ngOnInit() {
    var user = {userName: "Scott", password: "123"}
    this.authService.login(user).subscribe(data => {
       this.authService.loginx(data);
    })
  }

}
