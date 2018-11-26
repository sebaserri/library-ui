import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import Author from './author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private uri = environment.apiUrl;

  private headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  create(author: Author): Observable<any> {
    return this.http.post<any>(`${this.uri}/api/author`, author, this.headers);
  }
  
  all(): Observable<any> {
    return this.http.get<any>(`${this.uri}/api/author`, this.headers);
  }

  getByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.uri}/api/author/name/${name}`, this.headers);
  }

  getById(id: string): Observable<any> {
    return this.http.get<any>(`${this.uri}/api/author/${id}`, this.headers);
  }

  update(author: Author): Observable<any> {
    return this.http.put<any>(`${this.uri}/api/author`, author, this.headers);
  }

  delete(id: string): Observable<any> {
    return this.http.request<any>('DELETE', `${this.uri}/api/author`, { body: {id}});
  }
}
