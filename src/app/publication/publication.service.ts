import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import Publication from './publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  private uri = environment.apiUrl;

  private headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  create(publication: Publication): Observable<any> {
    return this.http.post<any>(`${this.uri}/api/publication`, publication, this.headers);
  }
  
  all(): Observable<any> {
    return this.http.get<any>(`${this.uri}/api/publication`, this.headers);
  }

  getByTitle(title: string, offset: number, limit: number): Observable<any> {
    return this.http.get<any>(`${this.uri}/api/publication/title/${title}?offset=${offset}&limit=${limit}`, this.headers);
  }

  getById(id: string): Observable<any> {
    return this.http.get<any>(`${this.uri}/api/publication/${id}`, this.headers);
  }

  getByAuthor(id: string): Observable<any> {
    return this.http.get<any>(`${this.uri}/api/publication/author/${id}`, this.headers);
  }

  update(publication: Publication): Observable<any> {
    return this.http.put<any>(`${this.uri}/api/publication`, publication, this.headers);
  }

  delete(id: string): Observable<any> {
    return this.http.request<any>('DELETE', `${this.uri}/api/publication`, { body: {id}});
  }
}
