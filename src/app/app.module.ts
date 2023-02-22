import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreetingComponent } from './components/greeting/greeting.component';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

// Our Module
import { ListsModule } from './modules/lists/lists.module';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';

@NgModule({
  declarations: [AppComponent, GreetingComponent, ContactsListComponent, LoginFormComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ListsModule, // Our Module
    HttpClientModule, // Importing the HttpClientModule for HTTP query
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
