import { Component, OnInit, Input } from '@angular/core';
import { UserServiceService } from '../Services/user-service.service';
import { AuthService } from '../Services/auth.service';
import { PhotosDto } from '../Models/PhotosDto';
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css']
})
export class PhotoEditorComponent implements OnInit {

  constructor(private AuthService: AuthService, private UserServiceService: UserServiceService) { }
  @Input() photos: PhotosDto[];

  public uploader: FileUploader;
  baseUrl = environment.apiUrl;

  initializeUploader() {
    this.uploader = new FileUploader({
      url:
      this.baseUrl +
      '/users/' +
      JSON.parse(localStorage.getItem('user')).id +
      '/photos',
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });
  }

  ngOnInit() {
    this.initializeUploader();
  }
  

}
