
import { Http } from '@angular/http';
import { Component, OnInit, NgModule, Input, Output, EventEmitter } from "@angular/core";
import { Currency, CurrencyService } from "app/currency.service";

@Component({
    selector: "currencies-overview",
    templateUrl: './currencies.component.html',
    providers: [CurrencyService]
})
export class CurrenciesOverviewComponent implements OnInit {

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

    addCurrency(currency: Currency) {
      console.log("addCurrency")
      if (!currency.getCode()) {
        console.log("no value for currency code")
      }
      if (!currency.getRate) {
        console.log("no value for currency rate")
      }
      // this.currencies.unshift(currency);
    }

    deleteCurrency(currency) {
      console.log("deleteCurrency")
      // let indexToDelete = this.currencies.indexOf(currency);
      // if (indexToDelete !== -1) {
      //   this.currencies.splice(indexToDelete,1);
      // }
    }

    toggle() {
      console.log("------------>>>>>>toggle");
    }
}

@Component({
  selector: 'currency-form',
  templateUrl: './currencyForm.component.html' 
})
export class CurrencyFormComponent {

  @Output() currencyCreated = new EventEmitter<Currency>();

  createCurrency(code: string, rate: string) {
    console.log("createCurrency(code=" + code + ", rate=" + rate + ")")
    this.currencyCreated.emit(new Currency(code, rate));
  }
}
