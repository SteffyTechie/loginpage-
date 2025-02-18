// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { DataService } from './data.service';
// import { ConstantsService } from '../config/constants.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class HttpClientService {
//   private baseUrl: any;
//   constructor(
//     private httpClient: HttpClient,
//     private dataService: DataService,
//     private constants: ConstantsService
//   ) {
//     this.baseUrl = this.constants.BASEURL;
//   }

//   getApi(url: string): Observable<any> {
//     return this.httpClient.get(`${this.baseUrl}` + url, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Methods': '*',
//         'Access-Control-Allow-Origin': '*',
//         Authorization: 'Bearer ' + this.dataService.getAuthBean().token,
//       },
//     });
//   }
//   postApi(url: string, param: any): Observable<any> {
//     return this.httpClient.post(`${this.baseUrl}` + url, param, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Methods': '*',
//         'Access-Control-Allow-Origin': '*',
//         Authorization: 'Bearer ' + this.dataService.getAuthBean().token,
//       },
//     });
//   }
//   postApiWithoutToken(url: string, param: any): Observable<any> {
//     return this.httpClient.post(`${this.baseUrl}` + url, param);
//   }
//   putApi(url: string, param: any): Observable<any> {
//     return this.httpClient.put(`${this.baseUrl}` + url, param);
//   }
//   deleteApi(url: string): Observable<any> {
//     return this.httpClient.delete(`${this.baseUrl}` + url, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Methods': '*',
//         'Access-Control-Allow-Origin': '*',
//         Authorization: 'Bearer ' + this.dataService.getAuthBean().token,
//       },
//     });
//   }
//   uploadFile(url: any, file: File): Observable<any> {
//     const formData: FormData = new FormData();
//     formData.append('file', file);
//     return this.httpClient.post(`${this.baseUrl}` + url, formData, {
//       headers: {
//         // 'Content-Type': 'multipart/form-data',
//         // 'Access-Control-Allow-Methods': '*',
//         // 'Access-Control-Allow-Origin': '*',
//         Authorization: 'Bearer ' + this.dataService.getAuthBean().token,
//       },
//     });
//   }
// }
// src/http-client.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
// import { ConstantsService } from '../config/constants.service';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  private apiUrl = 'http://localhost:8080/user/login/save'; // Replace with your actual endpoint
 
  httpClient: any;
  baseUrl: any;

  constructor(private http: HttpClient,
    private dataService: DataService,
    // private constants: ConstantsService

  ) {
    // {
    //       this.baseUrl = this.constants.BASEURL;
    //     }
  }

  saveFormData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
  uploadFile(url: string, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
  
    const authBean = this.dataService.getAuthBean();
    const token = authBean?.token;  
    if (!token) {
     
      throw new Error('No authentication token found.');
    }
  
    return this.httpClient.post(`${this.baseUrl}${url}`, formData, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    });
  }
  
  
}
