import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { UserServiceService } from '../../Services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {

  constructor(private AuthService: AuthService, private UserServiceService: UserServiceService, private Router: Router) { }

  member: any = {};
  updates = {};
  id = JSON.parse(localStorage.getItem('User')).id;

  ngOnInit() {
    this.getUser(this.id);
  }

  updateUser() {
    this.updates = { introduction: this.member.introduction, lookingFor: this.member.lookingFor, interests: this.member.interests, city: this.member.city };
    this.UserServiceService.UpdateUser(this.id, this.updates).subscribe();
  }

  getUser(id) {
    this.UserServiceService.GetUser(id).subscribe(data => this.member = data);
  }
}
