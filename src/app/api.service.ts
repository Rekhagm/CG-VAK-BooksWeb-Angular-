import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
const baseUrl = 'https://localhost:7022/api/Product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl="https://localhost:7022/api/Product"
  constructor (private http:HttpClient)  { }

  getCountries(){
    return this.http.get('https://restcountries.eu/rest/v2/all'); 
    }

  getproducts(){
    return this.http.get('https://localhost:7022/api/Product');
  }

  get(id: any): Observable<any> {debugger
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post('https://localhost:7022/api/Product', data);
  }

  update(id: any, data: any): Observable<any> {debugger
    return this.http.put(`${baseUrl}/${id}`,data);
    
  }

  delete(id:any){
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
