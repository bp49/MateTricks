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

  constructor(public AuthService: AuthService) { }

  ngOnInit() {
  }

  login() {
    console.log(this.model);
    this.AuthService.login(this.model).subscribe(data => console.log(data), error =>console.log(error));
    //console.log(JSON.parse(localStorage.getItem('user')));
    //console.log(localStorage.getItem('user'));
    //console.log(localStorage.getitem('token'));
  }
  logout() {
    this.AuthService.LogOut();

  }

  VerifyLogin() {
    this.AuthService.IsExpired();
  }
}
