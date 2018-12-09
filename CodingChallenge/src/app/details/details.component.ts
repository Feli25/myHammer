import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  title: string;
  cityCode: number;
  city: string;
  description: string;
  constructor() {
    this.title ="";
    this.cityCode = null;
    this.city = "";
    this.description = ""
  }
  @Input() selectedJob: Object;
  // @Input()
  // set selectedJob(selectedJob: Object) {
  //   // this.city = (selectedJob.city || "")
  //   this.selectedJob = selectedJob
  // }
  ngOnInit() {
  }
  // ngOnChanges(selectedJob: Object){
  //   console.log(selectedJob)
  //   this.selectedJob = selectedJob;
  //   console.log(this.selectedJob)
  //   this.title = selectedJob.title;
  //   this.city = selectedJob.city;
  //   this.cityCode = selectedJob.zip_code;
  //   this.description = selectedJob.description
  // }
}
