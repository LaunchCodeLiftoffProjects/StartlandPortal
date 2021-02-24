import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/comments/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

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
      assignmentId: data.assignmentId,
      userId: data.userId,
      content: data.content
    }, httpOptions);
  }

  update(id, data) {
    return this.http.put(baseUrl + `${id}`, {
      content: data
    });
  }

  delete(id): Observable<any> {
    return this.http.delete(baseUrl + `${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }
}
