import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class GithubService {
  baseUrl = 'https://api.github.com/repos/VCrishna/LeetCode/contents/';
  private headers = new HttpHeaders({
    Authorization: `token ${environment.githubToken}`,
  });

  // testing
  // private headers = new HttpHeaders({
  //   Authorization: `token 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`,
  // });

  constructor(private http: HttpClient) {}

  getFileContent(path: string = '') {
    return this.http.get<any>(`${this.baseUrl}${path}`, {
      headers: this.headers,
      responseType: 'json',
    });
  }
}
