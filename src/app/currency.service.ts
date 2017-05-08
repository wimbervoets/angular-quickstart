import { Injectable } from "@angular/core";

@Injectable()
export class CurrencyService {

    // getCurrencies() : {
    // }

    getCurrency(): Currency {
        return new Currency("USD", "1.123");
    }
}

export class Currency {

    code: string;
    rate: string;

    constructor(code: string, rate: string) {
        this.code = code;
        this.rate = rate;
    }

    public getCode(): string {
        return this.code;
    }

    public getRate(): string {
        return this.rate;
    }
}