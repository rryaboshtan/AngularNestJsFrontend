import { createReducer, on } from '@ngrx/store';
import { logoutSuccess } from '../../admin-auth-store/store/admin-auth.actions';
import {
  initMenu,
  initMenuSuccess,
  initMenuFailed,
} from './admin-menu.actions';

export const ADMIN_MENU_FEATURE_NAME = 'admin-menu';

export interface NestedTreeNode {
  name: string;
  href?: string;
  icon?: string;
  children?: NestedTreeNode[];
}

export interface AdminMenuState {
  loading: boolean;
  loaded: boolean;
  serverError: string;
  data: NestedTreeNode[] | null;
}

const initialState: AdminMenuState = {
  loaded: false,
  loading: false,
  serverError: '',
  data: [],
};

export const adminMenuReducer = createReducer(
  initialState,
  on(initMenu, (state) =>
    state.loaded
      ? state
      : {
          ...state,
          loading: true,
        }
  ),
  on(initMenuSuccess, (state, props) => ({
    ...state,
    loading: false,
    loaded: true,
    serverError: '',
    data: props.data,
  })),
  on(initMenuFailed, (state, props) => ({
    ...state,
    loading: false,
    loaded: true,
    serverError: props.serverError,
    data: [],
  })),
  on(logoutSuccess, () => initialState)
);
