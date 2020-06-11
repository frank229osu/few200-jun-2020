import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';



@NgModule({
  declarations: [BooksComponent, EditComponent, ListComponent],
  imports: [
    CommonModule
  ],
  exports: [BooksComponent]
})
export class BooksModule { }
