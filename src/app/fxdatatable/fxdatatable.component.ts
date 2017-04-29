import { Component, OnInit, OnDestroy, Input, Output } from '@angular/core';

@Component({
  selector: 'fx-datatable',
  templateUrl: './fxdatatable.component.html',
  styleUrls: ['./fxdatatable.component.css']
})
export class FxDataTable implements OnInit {

  @Input() dataProvider: any[];
  @Input() columns: Column[];

  constructor() { }

  ngOnInit() {
  }

  getValueBy = function (o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
      var k = a[i];
      if (k in o) {
        o = o[k];
      } else {
        return;
      }
    }
    return o;
  }

}


export interface Column {
  headerText: string
  dataField: string
  sortable?: boolean;
  sort?: any;
}