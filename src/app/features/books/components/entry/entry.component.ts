import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})



export class EntryComponent implements OnInit {

  bookForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      title: '',
      author: '',
      format: ''
    });
  }

  submit(){
  }
}
