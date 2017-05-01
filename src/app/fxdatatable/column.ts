export interface Column {
  headerText: string;
  dataField: string;
  sortable?: boolean;
  sort?: any;
  template?: boolean;
}