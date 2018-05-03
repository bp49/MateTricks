import { Component, OnInit, Input } from '@angular/core';
import { UserServiceService } from '../../Services/user-service.service';
import { UserDTO } from '../../Models/UserDTO';
import { ActivatedRoute, Router } from '@angular/router';
//  import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {
  member = {};
  id = -1 ;

  constructor(private UserServiceService: UserServiceService, private ActivatedRoute: ActivatedRoute, private Router: Router /*private AuthService: AuthService*/ ) {}

  ngOnInit() {
    this.id = this.ActivatedRoute.snapshot.params.id;
    this.getUser(this.id);
  }
  getUser(id) {
    this.UserServiceService.GetUser(id).subscribe(data => this.member = data);
  }

}
