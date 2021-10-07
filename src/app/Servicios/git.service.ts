import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(private http: HttpClient) { }
  
  getGitHub() {
    return this.http.get(`https://api.github.com/users/morenodaniela`);
  }
}
