
import { Http } from '@angular/http';
import { Component, OnInit, NgModule, Input, Output, EventEmitter } from "@angular/core";
import { Currency, CurrencyService } from "app/currency.service";

@Component({
    selector: "currencies-overview",
    templateUrl: './currencies.component.html',
    providers: [CurrencyService]
})
export class CurrencyComponent implements OnInit {

    currencies: Array<Currency> = [];

    title = 'Currencies Overview';

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

@Component({
  selector: 'currency-form',
  template: `
<div class="card card-block">
  <h4 class="card-title">Create Currency</h4>
  <div class="form-group">
    <input type="text"
           class="form-control"
           placeholder="Enter the code"
           #code>
  </div>
  <div class="form-group">
    <input type="text"
           class="form-control"
           placeholder="Enter the rate"
           #rate>
  </div>
  <button type="button"
          class="btn btn-primary"
          (click)="createCurrency(code.value, rate.value)">Create</button>
</div>
  `
})
export class CurrencyFormComponent {
  @Output() currencyCreated = new EventEmitter<Currency>();

  createCurrency(code: string, rate: string) {
    this.currencyCreated.emit(new Currency(code, rate));
  }
}
