import { Component, OnInit } from '@angular/core';
import { MusicState, selectSongListItems } from './reducers';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SongListItem } from './models';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  songs$: Observable<SongListItem[]>;
  constructor(private store: Store<MusicState>) { }

  ngOnInit(): void {
    this.songs$ = this.store.pipe(
      select(selectSongListItems),
      tap(songs => console.log(songs))
    );
  }

}
