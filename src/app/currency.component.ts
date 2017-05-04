
import { Component, Input } from "@angular/core";
import { Currency, CurrencyService } from "app/currency.service";

@Component({
    selector: "currency",
    template: `<div class="card card-block">
                    <h2>Code: {{currency.code}}</h2>
                    <h2>Rate: {{currency.rate}}</h2>
                <div>`,
                providers: [CurrencyService]
})
export class CurrencyComponent {

    @Input() currency: Currency;

    constructor(currencyService: CurrencyService) {
        this.currency = currencyService.getCurrency();
    }
}
