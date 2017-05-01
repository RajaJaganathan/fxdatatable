import {
  Component,
  AfterContentInit,
  Input,
  Output,
  TemplateRef,
  QueryList,
  ContentChildren,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'fx-column',
  template: ``
})
export class FxColumn implements AfterContentInit {

  @Input() dataField: string;
  @Input() sortField: string;
  @Input() headerText: string;
  @Input() sortable: boolean;
  @Input() sort: any;

  @ContentChildren(TemplateRef) templates: QueryList<any>;
  @ContentChild(TemplateRef) template: TemplateRef<any>;

  public headerTemplate: TemplateRef<any>;

  constructor() { }

  ngAfterContentInit(): void {
    this.templates.forEach((item) => {
      console.log('this.template', this.template);
      // switch (item.getType()) {
      //   case 'header':
      this.headerTemplate = this.template
      //     break;
      // }
    });
  }
}
