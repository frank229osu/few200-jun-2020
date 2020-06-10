import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
export const featureName = 'music';
import * as fromSongs from './songs.reducer';
import { SongListItem } from '../models';

export interface MusicState {
  songs: fromSongs.SongState;
}

export const reducers: ActionReducerMap<MusicState> = {
  songs: fromSongs.reducer
};


// 1. Feature Selector.
const selectMusicFeature = createFeatureSelector<MusicState>(featureName);
// 2. Selector per branch
const selectSongBranch = createSelector(
  selectMusicFeature,
  f => f.songs
);

// 3. "Helpers"
// console.log(fromSongs.adapter.getSelectors(selectSongBranch));

const { selectAll: selectSongEntityArray } = fromSongs.adapter.getSelectors(selectSongBranch);
// this gives us SongEntity[]

// 4. What the components need.

// TODO: SongListItem[]

export const selectSongListItems = createSelector(
  selectSongEntityArray, // SongEntity[]
  (songs) => songs as SongListItem[] // SongListItem[] - what the component needs.
);
