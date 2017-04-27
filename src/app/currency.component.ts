
import { Component } from "@angular/core";
import { Currency, CurrencyService } from "app/currency.service";

@Component({
    selector: "di-currency-page",
    template: `<div>
                    <h2>Code: {{currency.code}}</h2>
                    <h2>Rate: {{currency.rate}}</h2>
                <div>`,
                providers: [CurrencyService]
})
export class CurrencyComponent {
    currency: Currency;

    constructor(currencyService: CurrencyService) {
        this.currency = currencyService.getCurrency();
    }
}