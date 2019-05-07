import { Component } from '@angular/core';
import{Repository} from './repository';
import {RepositoryService} from './repository.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  githubUserName:string=""
  Repos:Repository[]=[]
  loading:boolean=false
  errorAlert;
constructor(private repositoryService:RepositoryService){
  }
  public fetchUser(){
    this.loading=true;
    this.errorAlert="";
          this.repositoryService.fetchUser(this.githubUserName)
              .subscribe((response) => {this.Repos=response;},
              (error) => {this.errorAlert=error; this.loading=false; },
              () => {this.loading=false;})
      }
}
