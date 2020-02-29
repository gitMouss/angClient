import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { from } from 'rxjs';

export const routes : Routes =[
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'clients', component: ClientsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientsComponent,
    ContactComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
