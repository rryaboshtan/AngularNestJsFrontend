import { createReducer } from '@ngrx/store';

export const ADMIN_AUTH_FEATURE_NAME = 'admin-auth';

export interface AuthData {
  accessToken: string;
}

export interface AdminAuthState {
  loading: boolean;
  loaded: boolean;
  serverError: string;
  authData?: AuthData;
}

const initialState: AdminAuthState = {
  loaded: false,
  loading: false,
  serverError: '',
};

export const adminAuthReducer = createReducer(initialState);
