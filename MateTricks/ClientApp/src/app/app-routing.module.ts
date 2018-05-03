import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './Member/member/member-list/member-list.component';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberDetailsComponent } from './Member/member-details/member-details.component';
import { MemberEditComponent } from './Member/member-edit/member-edit.component';

const routes: Routes = [
  { path: 'Register', component: RegisterComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Members', component: MemberListComponent },
  { path: 'Friends', component: FriendsListComponent },
  { path: 'Messages', component: MessagesComponent },
  { path: 'members/:id', component: MemberDetailsComponent },
  { path: 'member/edit', component: MemberEditComponent },
  { path: '**', redirectTo: 'Home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
