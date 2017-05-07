import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CurrenciesOverviewComponent, CurrencyFormComponent } from "app/currencies.component";

// import { AngularFireModule } from 'angularfire2';

//https://github.com/angular/angularfire2/blob/master/docs/1-install-and-setup.md


// // Must export the config
// export const firebaseConfig = {
//   apiKey: '<your-key>',
//   authDomain: '<your-project-authdomain>',
//   databaseURL: '<your-database-URL>',
//   storageBucket: '<your-storage-bucket>',
//   messagingSenderId: '<your-messaging-sender-id>'
// };

@NgModule({
  declarations: [
    AppComponent,
    CurrencyFormComponent,
    CurrenciesOverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    // , AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
