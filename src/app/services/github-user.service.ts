import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { GithubUser } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GithubUserService {

  base: string = 'https://api.github.com/users';
  user: BehaviorSubject<GithubUser> = new BehaviorSubject(new GithubUser());

  constructor(private http: HttpClient) { }

  retrieveGithubUser(user: GithubUser) {
    this.http.get<GithubUser>(`${this.base}/${user.login}`)
      .subscribe(retrievedUser => {
        this.user.next(retrievedUser);
      });
  }
}
