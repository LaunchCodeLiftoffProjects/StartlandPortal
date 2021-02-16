import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { AnnouncementService } from '../_services/announcement.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  announcements = [];
  currentUser: any;
  announcementForm: FormGroup;
  submitted = false;

  constructor(
    private token: TokenStorageService,
    private announcementService: AnnouncementService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.announcementForm = this.formBuilder.group({
      announcement: ['']
    });
  }

  addAnnouncement(newAnnouncement: string){
    if(newAnnouncement !== ""){
      this.announcements.push(newAnnouncement);
   }
  }

  onFormSubmit(){
    this.announcementService.create(this.announcementForm.value)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
      }
}
