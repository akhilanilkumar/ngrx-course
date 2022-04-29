import { createAction, props } from '@ngrx/store';
import { User } from './model/user.model';

const login = createAction('[Login] Event ⏩', props<{ user: User }>());

const logout = createAction('[Logout] Event ✈ ');

export const AuthAction = { login, logout };
