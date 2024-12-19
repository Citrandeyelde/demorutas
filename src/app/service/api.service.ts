import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public urlApi="http://localhost:1234/listarjson"

  constructor( private http:HttpClient) { }

  public getData():Observable<any> {
    return this.http.get<any>(this.urlApi);
  }
}
