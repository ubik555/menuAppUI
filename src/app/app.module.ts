import { WeekHeaderComponent } from './../components/week-header/week-header';
import { WeekMenuComponent } from './../components/week-menu/week-menu';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home'; 

import { MenuService} from '../services/menu.service';
import { Broadcaster } from '../services/broadcaster.service'; 
import { WeekService } from '../services/week.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WeekHeaderComponent,
    WeekMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MenuService,
    Broadcaster,
    WeekService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
