import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/assignment/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get(baseUrl + 'getAll');
  }

  getSelectedAssignment(id) {
    return this.http.get(baseUrl + `${id}`);
  }

  get(userId, moduleNum) {
    return this.http.get(baseUrl + `${userId}/` + `${moduleNum}`);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl + 'create', {
      name: data.name,
      moduleNum: data.moduleNum,
      link: data.link,
      userId: data.userId
    }, httpOptions);
  }

  update(id, data) {
    return this.http.put(baseUrl + `${id}`, {
      link: data
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