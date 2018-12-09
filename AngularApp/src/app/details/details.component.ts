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
  @Input()
  set selectedJob(selectedJob: any) {
    this.city = selectedJob.city,
    this.title = selectedJob.title,
    this.cityCode = selectedJob.zip_code,
    this.description = selectedJob.description
  }
  ngOnInit() {
  }
}
