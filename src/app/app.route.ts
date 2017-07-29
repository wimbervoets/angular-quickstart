import { NgModule, Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, RouterModule, CanActivate } from '@angular/router';

import { JhiPaginationUtil } from 'ng-jhipster';

import { CurrencyDetailComponent } from 'app/currency/currency-detail.component';
import { CurrencyPopupComponent } from 'app/currency/currency-dialog.component';
// import { CurrencyDeletePopupComponent } from 'app/currency/currency-delete-dialog.component';
import { CurrenciesOverviewComponent } from "app/currency/currencies.component";
//import { CategoriesOverviewComponent } from "app/category/categories.component";
import { CurrencyComponent } from "app/currency/currency.component";
import { CategoriesOverviewComponent } from "app/category/categories.component";
import { PersonsOverviewComponent } from "app/person/persons.component";
import { AboutComponent } from "app/about/about.component";
import { TestComponent } from "app/test/test.component";

export const appRoutes: Routes = [
    { path: '', redirectTo: 'currencies', pathMatch: 'full' },
    { path: 'persons', component: PersonsOverviewComponent },
    { path: 'about', component: AboutComponent },
    { path: 'test', component: TestComponent },
	{ path: 'home', redirectTo: 'currencies', pathMatch: 'full' },
	{ path: '**', component: CurrenciesOverviewComponent }
];

export const appPopupRoutes: Routes = [
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { enableTracing: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppModule { }