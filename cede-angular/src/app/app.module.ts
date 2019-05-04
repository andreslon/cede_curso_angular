import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UsersModule } from './users/users.module';


import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

//ngx-translate configuration
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { NgrxComponent } from './ngrx/ngrx.component';
import { NgrxListComponent } from './ngrx-list/ngrx-list.component';

import { StoreModule } from '@ngrx/store';
import { ngrxReducer } from './ngrx.reducer';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    PadreComponent,
    HijoComponent,
    RxjsComponent,
    NgrxComponent,
    NgrxListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ ngrx: ngrxReducer }),
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
      },
      {
        path: 'padre',
        component: PadreComponent
      }
      ,
      {
        path: 'rxjs',
        component: RxjsComponent
      }
    ]),
    UsersModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {

  }
}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}