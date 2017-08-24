import { BaseEntity } from "app/core/base-entity";


export class Currency implements BaseEntity {

    constructor(public id?: number, public code?: string, public rate?: string) {
        this.code = code
        this.id = id
        this.rate = rate
    }
}
