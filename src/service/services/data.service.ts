
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getAuthBean() {
    const token = localStorage.getItem('authToken');
    if (token) {
      return { token };  
    } else {
      return { token: null };  
    }
  }
  private apiUrl = 'http://localhost:8080/user/login/save'; 

  constructor(private http: HttpClient) {}

  saveFormData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}

