import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component'; 
import { MaterialModule } from './material.module'; 
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UsersModule } from './users/users.module';


import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    //AppRoutingModule, 
    MaterialModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ]),
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(){
    
  }
 }
