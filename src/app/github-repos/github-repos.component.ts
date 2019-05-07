import { Component, OnInit } from '@angular/core';
import{Repository} from '../repository';
import {RepositoryService} from '../repository.service';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css'],
  providers:[RepositoryService]
})
export class GithubReposComponent implements OnInit {
  githubUserName:string=""
  Repos
  loading:boolean=false
  errorAlert
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

  ngOnInit() {
  }

}
