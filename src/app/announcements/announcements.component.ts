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
  announcementsCount: any;
  currentUser: any;
  
  announcementForm: FormGroup;
  reviseAnnouncementForm: FormGroup;
  submitted = false;

  updateMode = false;
  updateAnnouncementid: Number;

  validLink: any;

  constructor(
    private token: TokenStorageService,
    private announcementService: AnnouncementService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.announcementForm = this.formBuilder.group({
      content: [''],
      hyperlink: ['']
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

      this.announcementService.getAll()
      .subscribe(
        data => {
          this.announcementsCount = Object(data).length;
        },
        err => {
          this.announcementsCount = JSON.parse(err.error).message;
        }
      );
  }

  onFormSubmit(){
    if (this.announcementForm.value.link !== ''){
      if ((this.announcementForm.value.hyperlink).slice(0,4) !== 'http'){
        this.validLink = 'http://' + this.announcementForm.value.hyperlink;
      } else {
        this.validLink = this.announcementForm.value.link;
      }
    }
    
    this.announcementService.create(
      this.announcementForm.value.content,
      this.validLink)
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

      updateAnnouncement(id: number){
        this.updateAnnouncementid = id;
        this.updateMode = true;
      }

      cancelUpdateAnnouncement(){
        this.updateMode = false;
      }

      submitNewAnnouncement(announcement: any, newContent: string, newHyperlink: string){
        if (newHyperlink) {
          if ((newHyperlink).slice(0,4) !== 'http'){
            this.validLink = 'http://' + newHyperlink;
          } else {
            this.validLink = newHyperlink;
          }
        }
        
        this.announcementService.update(announcement.id, newContent, this.validLink)
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
