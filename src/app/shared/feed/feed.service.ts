import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class FeedService {
  public API = 'https://api.wizbii.com/v2/dashboard/?direction=newest';
  public LOGIN_URL = 'https://api.wizbii.com/v1/account/validate';
  public cheatingToken = '8edjjh0jsggscgoscokk8ok0gc40ss0';

  constructor(private http: HttpClient) {
  }

  getAll() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.cheatingToken}`
      })
    };
    return this.http.post(this.API, {}, httpOptions);
  }

  postComment(comment: string, id: string, user: string): void {
    setTimeout(() => {
      console.log(`Comment : ${comment}, from postId : ${id}, from user : ${user}, have been saved in BO :)`);
    }, 1000);
  }
}
