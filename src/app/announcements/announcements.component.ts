import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  announcements = [];
  currentUser: any;

  constructor(
    private token: TokenStorageService,
  ) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
  }

  addAnnouncement(newAnnouncement: string){
    if(newAnnouncement !== ""){
      this.announcements.push(newAnnouncement);
   }
  }

}
