import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from 'entities/tasks';
import { employeeReducer } from 'entities/employees';
import { userReducer } from 'entities/user';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    employees: employeeReducer,
    user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
