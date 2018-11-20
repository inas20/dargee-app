import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header-component';
import { NavComponent } from  './nav/nav-component';
import { LoginComponent } from  './login/login';
import { HomeComponent } from './home/home-component'
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule,
                  RouterModule.forRoot([
                   {
                     path:'login',
                     component:LoginComponent
                   },
                   {
                    path:'home',
                    component:HomeComponent
                  }]
                  )],
  declarations: [ AppComponent, HeaderComponent, NavComponent, LoginComponent, HomeComponent ],
  bootstrap:    [ AppComponent]
})
export class AppModule { }
