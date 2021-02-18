import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../_services/announcement.service';

import { TokenStorageService } from '../_services/token-storage.service';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  announcements: any;
  currentUser: any;
  
  announcementForm: FormGroup;
  reviseAnnouncementForm: FormGroup;
  submitted = false;

  updateMode = false;

  constructor(
    private token: TokenStorageService,
    private announcementService: AnnouncementService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.announcementForm = this.formBuilder.group({
      content: ['']
    });
    this.announcementService.getAll()
      .subscribe(
        data => {
          this.announcements = data;
        },
        err => {
          this.announcements = JSON.parse(err.error).message;
        }
      );
  }

  onFormSubmit(){
    this.announcementService.create(this.announcementForm.value)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          window.location.reload();
        },
        error => {
          console.log(error);
        });
      }

      deleteAnnouncement(announcement: any){
        this.announcementService.delete(announcement.id)
          .subscribe(
            response => {
              console.log(response);
              window.location.reload();
            },
            error => {
              console.log(error);
            }
          )
      }

      updateAnnouncement(){
        this.updateMode = true;
      }

      submitNewAnnouncement(announcement: any, newContent: string){
        console.log(newContent);
        this.announcementService.update(announcement.id, newContent)
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
