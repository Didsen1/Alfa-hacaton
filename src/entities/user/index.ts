import userReducer, { checkAuth, login, logout, TOKEN_KEY } from './model/userSlice';
import { type User } from './model/types/User';

export { userReducer, checkAuth, login, logout, User, TOKEN_KEY };
