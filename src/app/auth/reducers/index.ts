import { User } from './../model/user.model';
import {
  ActionReducerMap, createReducer, MetaReducer, on, State
} from '@ngrx/store';
import { environment } from './../../../environments/environment';
import { AuthAction } from '../auth.action';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: User;
}

export const reducers: ActionReducerMap<AuthState> = {
  user: null
};


export const metaReducers: MetaReducer<AuthState>[] = !environment.production ? [] : [];

export const initialState: AuthState = {
  user: null
};

/**
 * Reduce performs same function as reduce in JS
 * Whenever the action event calls, the callback function will get invoked by ngrx.
 */
export const authReducer = createReducer(
  initialState,
  on(AuthAction.login, (state, action) => ({ user: action.user })),
  on(AuthAction.logout, (state, action) => ({ user: undefined }))
);
