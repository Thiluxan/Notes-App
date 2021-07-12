import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from 'src/app/models/token';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json',
  })
}


@Injectable({
  providedIn: 'root'
})

export class AuthenticateService {

  url = "http://localhost:5000/auth"

  login(email:String,password:String):Observable<Token>{
    return this.httpClient.post<Token>(`${this.url}/login`,{email:email,password:password},httpOptions);
  }

  register(email:String,password:String,fullName:String){
    return this.httpClient.post(`${this.url}/register`,{email:email,password:password,fullName:fullName},httpOptions);
  }

  logout(){
    return localStorage.clear()
  }

  isAuthenticated(){
    if(localStorage.getItem('jwtToken') == null){
      return false
    }
    else{
      return true
    }
  }

  constructor(private httpClient:HttpClient) { }
}
