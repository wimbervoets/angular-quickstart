import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { appRoutes, appPopupRoutes } from 'app/app.route';

import { CurrencyComponent } from "app/currency/currency.component";
import { CurrencyDetailComponent } from "app/currency/currency-detail.component";
import { CurrencyService } from "app/currency/currency.service";
import { CurrencyPopupService } from "app/currency/currency-popup.service";
import { CurrenciesOverviewComponent, CurrencyPopupComponent2 } from "app/currency/currencies.component";
import { NgbModule, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { currencyPopupRoute, currencyRoute } from "app/currency/currency.route";

const ENTITY_STATES = [
    ...currencyRoute,
    ...currencyPopupRoute
];


import { 
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule
} from "@angular/material";


import { CurrencyDialogComponent, CurrencyPopupComponent } from "app/currency/currency-dialog.component";
// import { CurrencyDeleteDialogComponent, CurrencyDeletePopupComponent } from "app/currency/currency-delete-dialog.component";
import { DialogExample } from "app/currency/dialog";
import { NgbdModalBasic } from "app/currency/modal-basic";
import { CurrencyDeletePopupComponent, CurrencyDeleteDialogComponent } from "app/currency/currency-delete-dialog.component";



@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MdDialogModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true, enableTracing: true }),
    ],
    declarations: [
        // CurrencyFormComponent,
        CurrenciesOverviewComponent,
        CurrencyComponent,
        // CurrencyDetailComponent,
        CurrencyDialogComponent,
        CurrencyDeleteDialogComponent,
        // CurrencyPopupComponent,
        CurrencyPopupComponent2,
        CurrencyDeletePopupComponent,
        NgbdModalBasic
    ],
    entryComponents: [
        // CurrencyComponent,
        // CurrencyFormComponent,
        CurrencyDialogComponent,
        CurrencyDeleteDialogComponent,
        // CurrencyPopupComponent,
        CurrencyPopupComponent2,
        CurrencyDeletePopupComponent
    ],
    providers: [
        CurrencyService,
        CurrencyPopupService,
        NgbActiveModal
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CurrencyModule { }
