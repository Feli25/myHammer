import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class JobService {
  private jobUrl:string = 'assets/jobs.json';

  constructor(
    private http: HttpClient
  ) { }

  getJobs() {
    return this.http
      .get(this.jobUrl);
  }
}