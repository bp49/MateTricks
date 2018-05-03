import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AlertModule } from 'ngx-bootstrap/alert';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './Services/auth.service';
import { MemberListComponent } from './Member/member/member-list/member-list.component';
import { MemberCardComponent } from './Member/member-card/member-card.component';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { MessagesComponent } from './messages/messages.component';
import { UserServiceService } from './Services/user-service.service';
import { MemberDetailsComponent } from './Member/member-details/member-details.component';
import { TimeAgoPipe } from 'time-ago-pipe';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MemberEditComponent } from './Member/member-edit/member-edit.component';
import { PhotoEditorComponent } from './photo-editor/photo-editor.component';
import { FileUploadModule } from 'ng2-file-upload'; 

export function tokenGetter() {
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    MemberCardComponent,
    FriendsListComponent,
    MessagesComponent,
    MemberDetailsComponent,
    TimeAgoPipe,
    MemberEditComponent,
    PhotoEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    FileUploadModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:50770']
      }
    })
  ],
  providers: [AuthService, UserServiceService],
  bootstrap: [AppComponent]

})
export class AppModule { }
