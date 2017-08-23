import { Http } from '@angular/http';
import { Component, OnInit, NgModule, Input, Output, EventEmitter, OnDestroy } from "@angular/core";
import { CurrencyService } from "app/currency/currency.service";
import { Currency } from "app/currency/currency.model";
import { MdDialog, MdDialogRef } from "@angular/material";
import { ActivatedRoute } from "@angular/router";
import { CurrencyPopupService } from "app/currency/currency-popup.service";
import { NgbModalRef, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { CurrencyDialogComponent } from "app/currency/currency-dialog.component";

@Component({
    selector: "currencies-overview",
    templateUrl: './currencies.component.html',
    providers: [CurrencyService]
})
export class CurrenciesOverviewComponent implements OnInit {

    currencies: Array<Currency> = [];

    title = 'Currencies Overview';

    showRateError = false;

    currentSearch: string;

    // constructor(public dialog: MdDialog, private currencyService: CurrencyService) {
    // }

    constructor(public activeModal: NgbActiveModal, private currencyService: CurrencyService) {
    }

    ngOnInit() {
      this.getCurrencies()
    }

    getCurrencies() {
      this.currencyService.getCurrencies().subscribe(
          data => {
            console.log(data);
            this.currencies = data;
          },
          err => console.log("Can't get currencies. Error code: %s, URL: %s", err.status, err.url),
          () => console.log("Currencies are retrieved")
        )
    }

    createCurrency(currency: Currency) {
      console.log("createCurrency")
      if (!currency.code) {
        console.log("no value for currency code")
      }
      if (!currency.rate) {
        console.log("no value for currency rate")
        this.showRateError = true
      } else {
        this.showRateError = false
      }
      this.currencyService.create(currency).subscribe(
          data => {
            console.log(data)
            this.getCurrencies()
          },
          err => console.log("Can't create currency. Error code: %s, URL: %s", err.status, err.url),
          () => console.log("Currency created")
      )
    }

    updateCurrency(currency: Currency) {
      this.currencyService.update(currency)
    }

    deleteCurrency(id: number) {
      console.log("deleteCurrency")
      this.currencyService.delete(id);
    }

    toggle() {
      console.log("------------>>>>>>toggle");
    }

    clear() {
        this.currentSearch = '';
        this.getCurrencies();
    }

    search(query) {
        if (!query) {
            return this.clear();
        }
        this.currentSearch = query;
        this.getCurrencies();
    }



    openDialog() {
      // let dialogRef = this.dialog.open(CurrencyFormComponent);
      // let dialogRef = this.dialog.open(CurrencyPopupComponent2);
      // dialogRef.afterClosed().subscribe(result => {
        // this.selectedOption = result;
      // });
    }
}

// @Component({
//   selector: 'currency-form',
//   templateUrl: './currency-form.component.html' 
// })
// export class CurrencyFormComponent implements OnInit {
//   @Output() currencyCreated = new EventEmitter<Currency>();
//
//   constructor(public dialogRef: MdDialogRef<CurrencyFormComponent>) {}
//
//   createCurrency(code: string, rate: string) {
//     console.log("createCurrency(code=" + code + ", rate=" + rate + ")")
//     this.currencyCreated.emit(new Currency(null, code, rate));
//   }
//
//     ngOnInit() {
//     }
// }

@Component({
    selector: 'currency-popup2',
    template: ''
})
export class CurrencyPopupComponent2 implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private currencyPopupService: CurrencyPopupService
    ) {
        
    }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.modalRef = this.currencyPopupService
                    .open(CurrencyDialogComponent, params['id']);
            } else {
                this.modalRef = this.currencyPopupService
                    .open(CurrencyDialogComponent);
            }
        });
    }

    ngOnDestroy() {
        // this.routeSub.unsubscribe();
    }
}