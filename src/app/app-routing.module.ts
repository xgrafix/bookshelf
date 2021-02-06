import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopHeaderComponent } from './top-header/top-header.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { BookComponent } from './book/book.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ConfigComponent } from './config/config.componenet';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'book', component: BookComponent },
  { path: 'wish_list', component: WishListComponent },
  { path: 'config', component: ConfigComponent },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }