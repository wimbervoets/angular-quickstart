import { BaseEntity } from "app/core/base-entity";


export class Category implements BaseEntity {

    constructor(public id: number, public code: string, public name: string) {
    }
}
