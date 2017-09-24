import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @Input() error: any;
  @Output() login = new EventEmitter();
  @Output() errorType = new EventEmitter();
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.loginForm = this.formBuilder.group({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    this.loginForm.valueChanges.subscribe(data =>   this.errorType.emit(false));
  }

  ngOnInit() {
  }

}
