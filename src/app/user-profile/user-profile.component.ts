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
  username: any;
  firstName: any;
  lastName: any;
  email: any;
  school: any;

  constructor(
    private token: TokenStorageService,
    private router: ActivatedRoute, 
    private formBuilder: FormBuilder,
    private userService: UserService,
    
  ) {}

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.updateForm = this.formBuilder.group({
      email: [''],
      username: ['']
      });
    this.userService.getSelectedUser(this.currentUser.id)
      .subscribe(
        data => {
          this.username = Object(data).username;
          this.firstName = Object(data).firstName;
          this.lastName = Object(data).lastName;
          this.email = Object(data).email;
        },
        err => {
          this.username = JSON.parse(err.error).message;
        }
      );
  }

  updateProfile(){
    this.updateMode = true;
    
  }

  cancelUpdateProfile(){
    this.updateMode = false;
  }

  onFormSubmit(){
    if (this.updateForm.value.username === ''){
      this.username = this.currentUser.username
    } else { 
      this.username = this.updateForm.value.username
    }

    if (this.updateForm.value.email === ''){
      this.email = this.currentUser.email
    } else { 
      this.email = this.updateForm.value.email 
    }
    
    this.userService.update(this.currentUser.id, this.username, this.email)
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
