import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/announcement/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get(baseUrl + 'getAll');
  }

  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(content, hyperlink): Observable<any> {
    return this.http.post(baseUrl + 'create', {
      content: content,
      hyperlink: hyperlink
    }, httpOptions);
  }

  update(id, content, hyperlink) {
    return this.http.put(baseUrl + `${id}`, {
      content: content,
      hyperlink: hyperlink
    });
  }

  delete(id): Observable<any> {
    return this.http.delete(baseUrl + `${id}`);
    ;
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }
}
