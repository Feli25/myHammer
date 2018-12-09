import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() jobs: any;
  @Output() chooseJob: EventEmitter<Object> =   new EventEmitter();

  ngOnInit() {  
  }

  clicked(job){
    this.jobs.forEach(job => {job.active = false})
    job.active = !job.active;  
    this.chooseJob.emit(job)
  }

}
