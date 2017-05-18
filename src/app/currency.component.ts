
import { Component, Input } from "@angular/core";
import { Currency, CurrencyService } from "app/currency.service";

@Component({
    selector: "currency",
    templateUrl: './currency.component.html',
    providers: [CurrencyService]
})
export class CurrencyComponent {

    @Input() currency: Currency;

    constructor(currencyService: CurrencyService) {
        this.currency = currencyService.getCurrency();
    }
}
