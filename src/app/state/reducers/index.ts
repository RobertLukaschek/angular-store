import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

import { booksReducer } from './../books.reducer';
import { collectionReducer } from './../collection.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  books: booksReducer, 
  collection: collectionReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
