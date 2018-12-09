import { Component } from '@angular/core';
import { Capability } from 'protractor';
var Jobs = require('../../jobs.json')

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title : string;
  jobs : Object[];
  selectedJob : Object;
  jobTitle: string;
  cityCode: number;
  city: string;
  description: string;

  constructor(){
    this.title = 'the MyHammer Frontend Coding Challenge';
    this.jobs = Jobs.body;
    // this.jobTitle = "";
    // this.cityCode = null;
    // this.city = "";
    // this.description = ""
    // this.selectedJob = {
    //   title: "",
    //   city: "",
    //   zip_code: null,
    //   description: ""
    // }
  }
  chooseJobHandler(job: Object){
    console.log(job)
    console.log(job.title)
    // this.selectedJob = job
    // this.jobTitle = job.title;
    // this.cityCode = null;
    // this.city = "";
    // this.description = ""
  }
}
