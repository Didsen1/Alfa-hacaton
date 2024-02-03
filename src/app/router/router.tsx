import App from 'app/ui/App';
import { ErrorPage } from 'pages/ErrorPage';
import LoginPage from 'pages/LoginPage/ui/LoginPage';
import { createBrowserRouter } from 'react-router-dom';
import CreateTask from 'entities/tasks/ui/CreateTask/CreateTask';
import { OpenTask } from 'entities/tasks';
import Analytics from 'widgets/Analytics';
import ProtectedRoute from './ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <ProtectedRoute />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/plan',
        element: <ProtectedRoute Component={<OpenTask planId="1" taskId="2" />} />,
      },
      {
        path: '/plan/:task_id',
        element: <ProtectedRoute Component={<Analytics />} />,
      },
      {
        path: '/admin',
        element: <ProtectedRoute Component={<CreateTask />} />,
      },
    ],
  },
]);
