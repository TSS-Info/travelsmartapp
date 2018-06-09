import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { LoginPage } from '../pages/login/login';
import { SearchPage } from '../pages/search/search';
import { SignupPage } from '../pages/signup/signup';
import { RegisterPage } from '../pages/register/register';
import { ConformationPage } from '../pages/conformation/conformation';
import { BoardingPassPage } from '../pages/boarding-pass/boarding-pass';

@NgModule({
  declarations: [
    LoginPage,
    SignupPage,
    RegisterPage,
    ConformationPage,
    MyApp,
    TabsPage,
    HomePage,
    BoardingPassPage,
    SearchPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      // iconMode: 'ios',
      // tabsPlacement: 'bottom'
    }
    )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    LoginPage,
    SignupPage,
    RegisterPage,
    ConformationPage,
    MyApp,
    TabsPage,
    HomePage,
    BoardingPassPage,
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
