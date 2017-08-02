import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { environment } from '../environments/environment';
import * as firebase from 'firebase/app';

import { AppComponent } from './app.component';
import { CurrenciesOverviewComponent   } from "app/currency/currencies.component";
import { SortPipe } from './sort.pipe';
import { CurrencyDetailComponent } from 'app/currency/currency-detail.component';
import { CurrencyPopupComponent, CurrencyDialogComponent } from 'app/currency/currency-dialog.component';
//import { CategoriesOverviewComponent } from './category/categories.component';
import { CurrencyModule } from "app/currency/currency.module";
import { appRoutes, appPopupRoutes } from "app/app.route";
import { CategoryModule } from "app/category/category.module";
import { PersonModule } from "app/person/person.module";
import { NoContentComponent } from './no-content/no-content.component';
import { AboutComponent } from './about/about.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DialogExample } from "app/currency/dialog";
import { CurrencyComponent } from "app/currency/currency.component";
import { TestComponent } from './test/test.component';

// import {
//   MdAutocompleteModule,
//   MdButtonModule,
//   MdButtonToggleModule,
//   MdCardModule,
//   MdCheckboxModule,
//   MdChipsModule,
//   MdCoreModule,
//   MdDatepickerModule,
//   MdDialogModule,
//   MdExpansionModule,
//   MdGridListModule,
//   MdIconModule,
//   MdInputModule,
//   MdListModule,
//   MdMenuModule,
//   MdNativeDateModule,
//   MdProgressBarModule,
//   MdProgressSpinnerModule,
//   MdRadioModule,
//   MdRippleModule,
//   MdSelectModule,
//   MdSidenavModule,
//   MdSliderModule,
//   MdSlideToggleModule,
//   MdSnackBarModule,
//   MdTabsModule,
//   MdToolbarModule,
//   MdTooltipModule,
// } from '@angular/material';

// import { AngularFireModule } from 'angularfire2';

//https://github.com/angular/angularfire2/blob/master/docs/1-install-and-setup.md

//https://www.youtube.com/watch?v=Rc_apapKP7c

const APP_ROUTES = [
    ...appRoutes,
    ...appPopupRoutes,
];

@NgModule({
  declarations: [
    SortPipe,
    AppComponent,
    NoContentComponent,
    AboutComponent,
    TestComponent
    // DialogExample
  ],
  imports: [
    // BrowserAnimationsModule,
    // MdNativeDateModule,


    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    HttpModule,
    CategoryModule,
    CurrencyModule,
    PersonModule,
    RouterModule.forRoot(APP_ROUTES, { useHash: true, enableTracing: true }),
    AngularFireModule.initializeApp(environment.firebase), //imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    NgbModule.forRoot()
  ],
    // entryComponents: [
    //   DialogExample,
    //   DialogResultExample,
    //   DialogResultExampleDialog
    // ],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
