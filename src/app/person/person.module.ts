import { CommonModule } from '@angular/common';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PersonsOverviewComponent } from "app/person/persons.component";

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        PersonsOverviewComponent
    ],
    entryComponents: [
    ] ,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PersonModule { }