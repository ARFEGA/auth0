import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HOMEComponent } from './components/home/home.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { PricesComponent } from './components/prices/prices.component';

//import de auth0
import { AuthModule } from '@auth0/auth0-angular';
import { UserDataComponent } from './components/user-data/user-data.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HOMEComponent,
    ProtectedComponent,
    PricesComponent,
    UserDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-rn4s1fwo.eu.auth0.com',
      clientId: 'PhH9I1FK9fQ76SHlHlh7RFLOHftfr4Iw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
