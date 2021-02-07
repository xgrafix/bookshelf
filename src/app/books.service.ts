import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class BooksService { 
    constructor(private http:HttpClient) {}

    getData() {
        let url = "http://30.0.0.11:8000/books/"

        return this.http.get(url);
    }
}