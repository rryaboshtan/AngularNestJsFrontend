import { createReducer, on } from '@ngrx/store';
import { login, loginFailed, loginSuccess, logoutSuccess } from './admin-auth.actions';

export const ADMIN_AUTH_FEATURE_NAME = 'admin-auth';

export interface AuthData {
  accessToken: string;
  /**
   * Admin Id in MySQL
   */
  id: number;
  iat: number;
  /**
   * Expiring at timestamp  
   */
  exp: number;
}

export interface AdminAuthState {
  loading: boolean;
  loaded: boolean;
  serverError: string;
  authData?: AuthData | null;
}

const initialState: AdminAuthState = {
  loaded: true,
  loading: false,
  serverError: '',
};

export const adminAuthReducer = createReducer(
  initialState,
  on(login, (state) => ({
    ...state,
    loading: true,
  })),
  on(
    loginSuccess,
    (state, { authData: AuthData }) => ({
      ...state,
      authData: AuthData,
      loaded: true,
      loading: false,
      serverError: '',
    })
  ),
  on(loginFailed, (state, { serverError }) => ({
    ...state,
    authData: null,
    loaded: true,
    loading: false,
    serverError,
  })),
  on(logoutSuccess, () => ({
    ...initialState,
    authData: null,
  })),
);
