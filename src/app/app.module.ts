import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { GithubReposComponent } from './github-repos/github-repos.component';
const routes:Routes=[
  
  {path:"search-user",component:SearchUserComponent},
  {path:"github-repos",component:GithubReposComponent}
]
 
@NgModule({
  declarations: [
    AppComponent,
    SearchUserComponent,
    GithubReposComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
