import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})
export class PersonsOverviewComponent implements OnInit {

    title = 'Persons Overview';

    showRateError = false;

    constructor() {
    }

    ngOnInit() {
    }
}
