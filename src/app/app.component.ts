
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {

  // title = 'Currencies Overview';

  // currencies: Array<Currency> = [];

  // dataSource: Observable<Currency>;

  // constructor(private http: Http, currencyService: CurrencyService) {
  //   // this.dataSource = this.http.get("api/currencies").map(res => res.json());
  // }

  // ngOnInit() {
  //   this.http.get("api/currencies")
  //     .map(res => res.json())
  //     .subscribe(
  //       data => {
  //         this.currencies = data;
  //         this.currencies.push(data);
  //       },
  //       err => console.log("Can't get currencies. Error code: %s, URL: %s", err.status, err.url),
  //       () => console.log("Currencies are retrieved")
  //     )
  // }
}
