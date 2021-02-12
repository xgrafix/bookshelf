import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { AppRoutingModule } from './app-routing.module';
import { WishListComponent } from './wish-list/wish-list.component';
import { BookComponent } from './book/book.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ConfigComponent } from './config/config.componenet';

import { MessageService } from './message.service';
import { BooksService } from './books.service';
@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    WishListComponent,
    BookComponent,
    PageNotFoundComponent,
    HomeComponent,
    ConfigComponent,
    MatDialogModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MessageService, BooksService],
  bootstrap: [AppComponent],
})
export class AppModule { }
