import { Component, OnInit, OnDestroy, Input, Output } from '@angular/core';

@Component({
  selector: 'fx-datatable',
  templateUrl: './fxdatatable.component.html',
  styleUrls: ['./fxdatatable.component.css']
})
export class FxDataTableComponent implements OnInit {

  @Input() dataProvider:any[];
  @Input() columns:any[];

  constructor() { }

  ngOnInit() {
  }

}
