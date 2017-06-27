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
