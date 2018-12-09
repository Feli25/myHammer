import { Component } from '@angular/core';
var Jobs = require('../../jobs.json')
var activeJobs = Jobs.body.filter(job => job.state == "active")

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title : string;
  jobs : Object[];
  selectedJob : Object;
  hide : boolean;

  constructor(){
    this.title = 'the MyHammer Frontend Coding Challenge';
    this.jobs = activeJobs;
    this.hide = true
    this.selectedJob = {
      title: "",
      city: "",
      zip_code: null,
      description: ""
    }
  }
  chooseJobHandler(job: any){
    this.hide = false
    this.selectedJob = job
  }
}
