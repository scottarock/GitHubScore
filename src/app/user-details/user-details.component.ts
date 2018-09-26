import { Component, OnInit } from '@angular/core';
import { GithubUserService } from '../services';
import { GithubUser } from '../models';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: GithubUser;
  score: number;
  message: string;
  color: string;

  constructor(private githubUserService: GithubUserService) { }

  ngOnInit() {
    // subscribe to the user observable and calculate needed values when changed
    this.githubUserService.user.subscribe(user => {
      this.user = user;
      this.score = this.user.followers + this.user.public_repos;
      if ( this.score <  20) {
        this.message = 'Needs Work!';
        this.color = 'red';
      } else if ( this.score < 50 ) {
        this.message = 'A Decent Start!';
        this.color = 'orange';
      } else if ( this.score < 100 ) {
        this.message = 'Doing Good';
        this.color = 'black';
      } else if ( this.score < 200 ) {
        this.message = 'Great Job!';
        this.color = 'green';
      } else {
        this.message = 'GitHub Elite!';
        this.color = 'blue';
      }
    });
  }

}
