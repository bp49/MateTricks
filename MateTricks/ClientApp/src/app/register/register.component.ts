import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model = {};
  //model = { username: '', password: '' };
  //PasswordConfirmation = { PasswordConfirm: ''}
  constructor(public AuthService: AuthService) { }

  ngOnInit() {
  }

  //PassVerify() {
  //  return this.model.password == this.PasswordConfirmation.PasswordConfirm;
  //}
  //InvalidPwd = {
  //  msg: 'These passwords do not match!'
  //}
  register() {
    console.log(this.model);
    this.AuthService.Register(this.model).subscribe(data => console.log(data), error => console.log(error));
  }
}
