import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
    this.http.get('http://3.86.216.136:9001/ranking/');
  }

  getDatos(): Observable<any>{
      return this.http.get('http://3.86.216.136:9001/ranking/');

  }

  createRanking(ranking: any): Observable<any>{
    return this.http.post('http://3.86.216.136:9001/ranking/', ranking);

  }
  
}


