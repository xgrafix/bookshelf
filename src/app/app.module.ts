import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { ConfirmDialogService } from './shared/confirm-dialog/confirm-dialog.service';
import { CrudDialogComponent } from './shared/crud-dialog/crud-dialog.component';
import { CrudDialogService } from './shared/crud-dialog/crud-dialog.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    WishListComponent,
    BookComponent,
    PageNotFoundComponent,
    HomeComponent,
    ConfigComponent,
    ConfirmDialogComponent,
    CrudDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatInputModule
  ],
  providers: [MessageService, BooksService, ConfirmDialogService, CrudDialogService],
  bootstrap: [AppComponent],
})
export class AppModule { }
