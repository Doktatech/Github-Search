import { Injectable } from '@angular/core';
import{User} from './user';
import{Observable} from 'rxjs';
import{HttpClient} from '@angular/common/http';
import{environment} from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl:string="https://api.github.com/"
  constructor(private http:HttpClient) { }
  fetchUser(githubUserName:string): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl+'users/'+githubUserName+'user?access_token='+environment.token)
  }
}
