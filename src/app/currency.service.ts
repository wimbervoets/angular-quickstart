import { Injectable, OnInit } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class CurrencyService {

    constructor(private http : Http) {

    }

    getCurrencies() {
        return this.http.get("/api/v1.0/currencies").map(res => res.json());
    }

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