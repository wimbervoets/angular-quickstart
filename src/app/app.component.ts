
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { CurrencyService, Currency} from "./currency.service";

@Component({
  selector: 'app-root',
  // template: '<h1>All Currencies</h1><ul><li *ngFor="let currency of currencies">{{currency.code}}</ul>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CurrencyService]
})
export class AppComponent implements OnInit {

  title = 'Currencies Overview';

  currencies: Array<Currency> = [];

  dataSource: Observable<Currency>;

  constructor(private http: Http, currencyService: CurrencyService) {
    // this.dataSource = this.http.get("api/currencies").map(res => res.json());
  }

  ngOnInit() {
    this.http.get("api/currencies")
      .map(res => res.json())
      .subscribe(
        data => {
          this.currencies = data;
          // this.currencies.push(data);
        },
        err => console.log("Can't get currencies. Error code: %s, URL: %s", err.status, err.url),
        () => console.log("Currencies are retrieved")
      )
  }
}
