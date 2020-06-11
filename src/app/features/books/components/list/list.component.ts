import { Component, OnInit, Input } from '@angular/core';
import { BooksListItem } from '../../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() books: BooksListItem[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
