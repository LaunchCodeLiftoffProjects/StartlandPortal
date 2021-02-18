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

  create(data): Observable<any> {
    return this.http.post(baseUrl + 'create', {
      content: data.content
    }, httpOptions);
  }

  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(baseUrl + `${id}`);
    ;
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }
}
