import { Injectable, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Currency } from "app/currency/currency.model";
import { Observable } from 'rxjs/Rx';
import { ResponseWrapper } from 'app/core/response-wrapper.model';
import { createRequestOption } from 'app/core/request-util';

const API_URL = "/api/v1.0/currencies"
const API_SEARCH_URL = 'api/v1.0/_search/currencies';

@Injectable()
export class CurrencyService {

    constructor(private http : Http) {
    }

    getCurrencies() {
        return this.http.get(API_URL).map(res => res.json())
    }

    find(code: String): Observable<Currency> {
        return this.http.get(`${API_URL}/${code}`).map((res: Response) => {
            return res.json();
        });
    }

    create(currency: Currency): Observable<Currency> {
        const copy = this.convert(currency);
        return this.http.post(API_URL, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(currency: Currency): Observable<Currency> {
        const copy = this.convert(currency);
        return this.http.put(API_SEARCH_URL, copy).map((res: Response) => {
            return res.json();
        });
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${API_URL}/${id}`);
    }

    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(API_URL, options)
            .map((res: Response) => this.convertResponse(res));
    }

    search(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(API_SEARCH_URL, options)
            .map((res: any) => this.convertResponse(res));
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        return new ResponseWrapper(res.headers, jsonResponse, res.status);
    }

    private convert(currency: Currency): Currency {
        const copy: Currency = Object.assign({}, currency);
        return copy;
    }
}