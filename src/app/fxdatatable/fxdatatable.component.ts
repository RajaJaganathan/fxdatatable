import { Component, OnInit, OnDestroy, Input, Output, Directive, TemplateRef } from '@angular/core';
import { Column } from './column';
import { FxColumn } from './fxdatatable.column';

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

@Directive({
    selector: '[fxTemplate]',
    host: {
    }
})
export class FxTemplate {
    
    @Input() type: string;
    
    @Input('fxTemplate') name: string;
    
    constructor(public template: TemplateRef<any>) {}
    
    public getType(): string {
        if(this.type) {
            console.log('Defining a pTemplate with type property is deprecated use pTemplate="type" instead.');
            return this.type;
        }
        else {
            return this.name;
        }
    }
}