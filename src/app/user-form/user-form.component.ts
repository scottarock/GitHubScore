import { Component, OnInit } from '@angular/core';
import { GithubUserService } from '../services';
import { GithubUser } from '../models';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: GithubUser = new GithubUser();

  constructor(private githubUserService: GithubUserService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user);
    this.githubUserService.retrieveGithubUser(this.user);
    this.user = new GithubUser;
  }

}
