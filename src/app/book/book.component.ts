import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Todo } from './todo';
import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  booksFullInfomation?: any;
  todos?: Observable<any>;
  newTodos?: Observable<any>;
  
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  
  // Using a service to fetch the data will be loaded on loading the page.

  // constructor(private books: BooksService) { 
  //   this.books.getData().subscribe(data => {
  //     this.booksFullInfomation = data;
  //     console.warn(data);
  //   });


  constructor(private http: HttpClient) { }

  getTodos() {

    let params = new HttpParams().set('userId', '1');
    let headers = new HttpHeaders().set('Authorization', 'auth-token')
    this.todos = this.http.get(this.ROOT_URL + '/todos', { headers });
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
  
}
