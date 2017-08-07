import { CommonModule } from '@angular/common';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CategoriesOverviewComponent } from "app/category/categories.component";
import { CategoryService } from "app/category/category.service";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        CategoriesOverviewComponent
    ],
    entryComponents: [
    ],
    providers: [
        CategoryService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CategoryModule { }