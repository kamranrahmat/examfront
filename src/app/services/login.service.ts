import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject=new Subject<boolean>();

  constructor(private http:HttpClient) { }

  //generate token
  public generateToken(loginData:any){
   return this.http.post(`${baseUrl}/generate-token`,loginData);
  }

  public getCurrentUser(){
    return this.http.get(`${baseUrl}/current-user`);
  }

  public loginUser(token:any){
    localStorage.setItem("token",token);
    return true;
  }

  public isLoggedIn():boolean{
    let token=localStorage.getItem("token");

    if(token==undefined || token=='' || token==null){
      return false;
    }else{
      return true
    }
  }
public logout():boolean{
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  return true;
}
public getToken():string|null{
  let token=localStorage.getItem("token");
  return token;
}
public setUser(user:any){
  localStorage.setItem("user",JSON.stringify(user));
}

public getUser(){
  let userStr=localStorage.getItem("user");
  if(userStr!=null){
    return JSON.parse(userStr);
  }else{
    this.logout();
    return null;
  }
}

public getUserRole(){
  let user=this.getUser();
  return user.authorities[0].authority;
}

}
