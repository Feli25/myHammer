import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() jobs: Object[];
  @Output() chooseJob: EventEmitter<Object> =   new EventEmitter();

  ngOnInit() {  
  }

  clicked(job){
    this.chooseJob.emit(job)
  }

}
