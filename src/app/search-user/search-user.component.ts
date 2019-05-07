import { Component, OnInit } from '@angular/core';
import { error } from 'util';
import{User} from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css'],
  providers:[UserService]
})
export class SearchUserComponent implements OnInit {
  githubUserName:string=""
  githubUser:User[]=[]
  loading:boolean=false;
  errorAlert; 
  constructor(private userService:UserService) {   
}
public fetchUser(){
    this.loading=true;
    this.errorAlert="";
      this.userService.fetchUser(this.githubUserName) 
      .subscribe((response)=> {this.githubUser=response;},
      (error)=>{this.errorAlert=error; this.loading=false;},
      ()=> {this.loading=false;})
  }
   ngOnInit() {
  }
}
