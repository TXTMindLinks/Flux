import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MercaditoPage } from '../pages/mercadito/mercadito';
import { OptionsPage } from '../pages/options/options';
import { ProductPage } from '../pages/product/product';
import { StandsPage } from '../pages/stands/stands';
import { FeaturesPage } from '../pages/features/features'
import { GoogleMaps } from '@ionic-native/google-maps';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MercaditoPage,
    OptionsPage,
    ProductPage,
    StandsPage,
    FeaturesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MercaditoPage,
    OptionsPage,
    ProductPage,
    StandsPage,
    FeaturesPage
  ],
  providers: [
    GoogleMaps,
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
