import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type User } from './types/User';

const initialState: User = {
  type: undefined,
  fullName: '',
  avatar: '',
};

// prettier-ignore
const getUser = (userType: User['type']): User => {
  let user;
  switch (userType) {
  case 'employee':
    user = {
      avatar: '',
      fullName: '',
      type: 'employee',
    };
    break
  case 'superior':
    user = {
      avatar: '',
      fullName: '',
      type: 'superior',
    };
    break
  default:
    user = {
      avatar: '',
      fullName: '',
      type: 'unset',
    };
    break;
  }

  return user as User;
};

const employeeToken = 'abcdefghijklmnopqrstuvwxyz1234567890';
const superiorToken = '1234567890abcdefghijklmnopqrstuvwxyz';
export const TOKEN_KEY = 'token_82nf9';

const getToken = (userType: User['type']) =>
  userType === 'employee' ? employeeToken : userType === 'superior' ? superiorToken : '';
const checkToken = (token: string | null): User['type'] => {
  let result: User['type'] = 'unset';

  if (token === superiorToken) {
    result = 'superior';
  }
  if (token === employeeToken) {
    result = 'employee';
  }

  return result;
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    checkAuth: (state) => {
      const token = localStorage.getItem(TOKEN_KEY);
      if (!token) {
        state.avatar = initialState.avatar;
        state.type = initialState.type;
        state.fullName = initialState.fullName;
      } else {
        const currentUserType = checkToken(token);
        const user = getUser(currentUserType);
        state.avatar = user.avatar;
        state.type = user.type;
        state.fullName = user.fullName;
      }
    },
    login: (state, action: PayloadAction<User['type']>) => {
      const user = getUser(action.payload);
      state.avatar = user.avatar;
      state.type = user.type;
      state.fullName = user.fullName;
      localStorage.setItem(TOKEN_KEY, getToken(action.payload));
    },
    logout: (state) => {
      state.avatar = initialState.avatar;
      state.fullName = initialState.fullName;
      state.type = initialState.type;
      localStorage.removeItem(TOKEN_KEY);
    },
  },
});

export const { checkAuth, login, logout } = userSlice.actions;

export default userSlice.reducer;
