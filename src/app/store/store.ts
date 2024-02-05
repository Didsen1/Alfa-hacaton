import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from 'entities/tasks';
import { employeeReducer } from 'entities/employees';
import { userReducer } from 'entities/user';
import { plansReducer } from 'entities/plans';
import { commentsReducer } from 'entities/comments';
import { notificationsReducer } from 'entities/notifications';

export const store = configureStore({
  reducer: {
    employees: employeeReducer,
    plans: plansReducer,
    tasks: tasksReducer,
    comments: commentsReducer,
    notifications: notificationsReducer,
    user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
