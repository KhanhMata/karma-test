import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BannerInlineComponent } from './banner-inline/banner-inline.component';
import { WelcomeComponent } from './welcome.component';
import { UserService } from './user.service';
import { TwainComponent } from './quotes/twain/twain.component';
import { TwainService } from './quotes/twain.service';


@NgModule({
  declarations: [
    AppComponent,
    BannerInlineComponent,
    WelcomeComponent,
    TwainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService, TwainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
