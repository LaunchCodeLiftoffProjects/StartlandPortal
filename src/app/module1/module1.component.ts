import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-module1',
  templateUrl: './module1.component.html',
  styleUrls: ['./module1.component.css']
})
export class Module1Component implements OnInit {
  safeUrl;
  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/LjUGysf4deI');
  }

}
