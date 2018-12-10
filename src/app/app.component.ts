import { Component } from '@angular/core';
import {JobService} from './config/config.service'

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

  constructor(private jobService: JobService){
    this.title = 'the MyHammer Frontend Coding Challenge';
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
  ngOnInit(){
    this.jobService.getJobs()
      .subscribe((data: any) =>  {
        this.jobs = data.body.filter(job => job.state == "active")
      })
  }
}
