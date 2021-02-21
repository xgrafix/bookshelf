import { Component, OnInit, Inject, Output } from '@angular/core';
import { BooksService } from '../books.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Todo } from './todo';
import { Book } from './book';
import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

import { ConfirmDialogService } from '../shared/confirm-dialog/confirm-dialog.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent {

  booksFullInfomation?: any;
  todos?: Observable<any>;
  books?: Observable<any>;
  newTodos?: Observable<any>;
  newBooks?: Observable<any>;
  dialog?: MatDialog;

  // readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  readonly ROOT_URL = 'http://localhost:8000';


  // Using a service to fetch the data will be loaded on loading the page.

  // constructor(private books: BooksService) { 
  //   this.books.getData().subscribe(data => {
  //     this.booksFullInfomation = data;
  //     console.warn(data);
  //   });


  constructor(private http: HttpClient, private dialogService: ConfirmDialogService) { 
  }

  handleClick() {
    const options = {
      title: 'Leave page?',
      message: 'By leaving this page you will permanently lose your form changes.',
      cancelText: 'CANCEL',
      confirmText: 'YES, LEAVE PAGE'
    };
    
    this.dialogService.open(options);
        
    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
            this.saveData();
          }
        });
  }
  saveData() {
    console.log('Hello');
  }

  getTodos() {

    let params = new HttpParams().set('userId', '1');
    let headers = new HttpHeaders().set('Authorization', 'auth-token')
    this.books = this.http.get(this.ROOT_URL + '/books', { headers });
  }

  getBooks() {

    // let params = new HttpParams().set('userId', '1');
    let headers = new HttpHeaders().set('Authorization', 'auth-token')
    this.books = this.http.get(this.ROOT_URL + '/books', { headers });
  }


  createTodos() {
    const data: Todo = {
      id: null,
      userId: 203,
      title: 'Ali\'s New Post',
      completed: 'false',
    }

    this.newTodos = this.http.post<Todo>(this.ROOT_URL + '/todos', { data })
      .pipe(map(todo => todo.data?.title))
  }


  createBooks() {
    const data: Book = {
      isbn: '8172387128312312381',
      title: 'Kalaila Wa Domna',
      author: 'Ma Adre Menho',
      category: 'Litrature',
    }

    console.log(BooksService.toString());



    this.newBooks = this.http.post<Book>(this.ROOT_URL + '/books', JSON.stringify(data))
      .pipe(map(todo => todo))
  }

}