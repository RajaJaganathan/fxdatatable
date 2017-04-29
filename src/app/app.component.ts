import { Component } from '@angular/core';
import { Column } from './fxdatatable/fxdatatable.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fxDataTable Demo';

  peopleTableColumns: Column[] = [{
    headerText: 'First Name',
    dataField: 'firstName',
    sortable: true
  }, {
    headerText: 'Last Name',
    dataField: 'lastName'
  }, {
    headerText: 'Age',
    dataField: 'age'
  }, {
    headerText: 'City',
    dataField: 'address.city'
  }, {
    headerText: 'Phone',
    dataField: 'phoneNumber[0].number'
  }];

  people: any[] = [{
    "firstName": "John",
    "lastName": "Doe",
    "age": 25,
    "address": {
      "streetAddress": "21 2nd Street",
      "city": "New York",
      "state": "NY",
      "postalCode": "10021"
    },
    "phoneNumber": [{
      "type": "home",
      "number": "172 555-1234"
    }, {
      "type": "fax",
      "number": "646 555-4567"
    }]
  }, {
    "firstName": "Raja",
    "lastName": "Jaganathan",
    "age": 62,
    "address": {
      "streetAddress": "21 2nd Street",
      "city": "India",
      "state": "TN",
      "postalCode": "10021"
    },
    "phoneNumber": [{
      "type": "home",
      "number": "212 555-1234"
    }, {
      "type": "fax",
      "number": "646 555-4567"
    }]
  }, {
    "firstName": "Joanne",
    "lastName": "Wall",
    "age": 70,
    "address": {
      "streetAddress": "21 2nd Street",
      "city": "New York",
      "state": "NY",
      "postalCode": "10021"
    },
    "phoneNumber": [{
      "type": "home",
      "number": "555-219-2012"
    }, {
      "type": "fax",
      "number": "646 555-4567"
    }]
  }, {
    "firstName": "Mary",
    "lastName": "Jone",
    "age": 32,
    "address": {
      "streetAddress": "21 2nd Street",
      "city": "California",
      "state": "CA",
      "postalCode": "10021"
    },
    "phoneNumber": [{
      "type": "home",
      "number": "555-219-2000"
    }, {
      "type": "fax",
      "number": "646 555-4567"
    }]
  }, {
    "firstName": "Maurice",
    "lastName": "Smith",
    "age": 22,
    "address": {
      "streetAddress": "21 2nd Street",
      "city": "India",
      "state": "TN",
      "postalCode": "10021"
    },
    "phoneNumber": [{
      "type": "home",
      "number": "555-219-2389"
    }, {
      "type": "fax",
      "number": "646 555-4567"
    }]
  }];
}
