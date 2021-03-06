import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {BookService} from '../services/book.service';
import {Book} from '../models/book';


@Component({
  templateUrl: 'traces.component.html'
})
export class TracesComponent {

  observableBooks: Observable<Book[]>;
  books: Book[];
  errorMessage: String;


  constructor(private bookService: BookService) {}
  
  ngOnInit(): void {
    this.observableBooks = this.bookService.getBooksWithObservable();
    this.observableBooks.subscribe(
      books => this.books = books,
      error => this.errorMessage = <any>error);
  }
}
