import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { users } from '../Components/model/User';
import { Observable, observable, Subscriber } from 'rxjs';
import { AddBooksComponent } from '../Components/add-books/add-books.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: users[]=[]
  books:any=[]

  constructor(private http:HttpClient) { }

  getUsers(){
    this.http.get(environment.apiUrl +'users').subscribe(users => console.log(users))
    
  }

  getProducts(){
    this.http.get(environment.apiUrl +'books').subscribe(books => console.log(books))
    
  }

  create(data: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/post`, data)
}

getItem(id: any): Observable<any> {
  return this.http.get(`${environment.apiUrl}/get`,id);
  
}

      login(email:string,pwd:string){

    return new Observable(Subscriber=>
    this.http.get(environment.apiUrl +'users').subscribe(users => {
      this.users.find(user => user.email == email && user.password==pwd)
      console.log(users)
      console.log("test1")
      if(users != undefined){
        console.log("test2")
        Subscriber.next(users)
        }else{
          console.log("test3")
          Subscriber.next('User not found')
        }
      })
    )
  }

}
    

