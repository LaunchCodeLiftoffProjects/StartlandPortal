import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  currentUser: any;
  updateForm: FormGroup;
  submitted = false;
  updateMode = false;
  comments: any;
  users: any;

  constructor(
    private token: TokenStorageService,
    private router: ActivatedRoute, 
    private formBuilder: FormBuilder,
    private userService: UserService,
    
  ) {}

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.updateForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      username: ['', Validators.required]
      });
  }

  updateProfile(){
    this.updateMode = true;
    
  }

  cancelUpdateProfile(){
    this.updateMode = false;
  }

  submitUpdatedUserInfo(){
    this.userService.update(this.currentUser)
      .subscribe(
        response => {
          console.log(response);
          this.updateMode = false;
          window.location.reload();
        },
        error => {
          console.log(error);
        });
      }

}
