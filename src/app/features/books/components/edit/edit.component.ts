import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BooksState } from '../../reducers';
import { addBook } from '../../actions/books-list.actions';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  formats = ['', 'HardCover', 'SoftCover', 'E-Book']; // todo state?
  bookForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private store: Store<BooksState>) { }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      format: ['', [Validators.required]]
    });
  }

  submit(focusMe: HTMLInputElement) {
    this.store.dispatch(addBook(this.bookForm.value));
    this.bookForm.reset();
    focusMe.focus();
  }

  get title() {
    return this.bookForm.get('title');
  }
  get author() {
    return this.bookForm.get('author');
  }
  get format() {
    return this.bookForm.get('format');
  }
}
