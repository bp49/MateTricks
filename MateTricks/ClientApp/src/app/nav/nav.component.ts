import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  model = {};
  isCollapsed = false;
  //User = " ";
  
  constructor(public AuthService: AuthService) { }

  ngOnInit() {
  }

  login() {
    console.log(this.model);
    this.AuthService.login(this.model).subscribe(data => console.log(data), error => console.log(error));
    //this.User = JSON.parse(localStorage.getItem('user')).userName;
    //console.log(localStorage.getItem('user'));
    //console.log(localStorage.getitem('token'));
    return this.VerifyLogin();
  }
  logout() {
    this.AuthService.LogOut();

  }

  VerifyLogin() {
    return this.AuthService.IsExpired();
  }
}
