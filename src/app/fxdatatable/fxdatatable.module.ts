import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FxDataTable } from './fxdatatable.component';
import { Column } from './column';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FxDataTable
  ],
  exports: [FxDataTable]
})
export class FxDataTableModule { }
