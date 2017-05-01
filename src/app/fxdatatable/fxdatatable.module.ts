import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FxDataTable, FxTemplate } from './fxdatatable.component';
import { FxColumn } from './fxdatatable.column';
import { Column } from './column';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FxDataTable,
    FxTemplate,
    FxColumn
  ],
  exports: [FxDataTable,
    FxTemplate,
    FxColumn]
})
export class FxDataTableModule { }
