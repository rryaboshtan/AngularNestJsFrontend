import { createReducer} from '@ngrx/store';

export const ADMIN_MENU_FEATURE_NAME = 'admin-auth';

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
  loaded: true,
  loading: false,
  serverError: '',
  data: [],
};

export const adminMenuReducer = createReducer(
  initialState,
);
