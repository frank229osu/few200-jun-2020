import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import * as appActions from '../../../actions/app.actions';
import * as songActions from '../actions/songs.actions';
import { switchMap, map } from 'rxjs/operators';
import { SongEntity } from '../reducers/songs.reducer';

@Injectable()
export class SongEffects {
  baseUrl = 'http://localhost:3000'; // This should come from the environments.ts


  addSong$ = createEffect(() =>
    this.actions$.pipe(
      ofType(songActions.addSong),
      switchMap(originalAction => this.http.post<SongEntity>(this.baseUrl + '/songs', {
        title: originalAction.payload.title,
        artist: originalAction.payload.artist,
        album: originalAction.payload.album
      }).pipe(
        map(response => songActions.addSongSucceded({ oldId: originalAction.payload.id, payload: response }))
      ))
    ), { dispatch: true }
  );


  loadSongs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      switchMap(() => this.http.get<GetResponse>(this.baseUrl + '/songs')
        .pipe(
          map(response => response.data),
          map(payload => songActions.loadSongsSucceeded({ payload }))
        )
      )
    ), { dispatch: true }
  );
  constructor(private actions$: Actions, private http: HttpClient) { }
}

interface GetResponse {
  data: SongEntity[];
}
