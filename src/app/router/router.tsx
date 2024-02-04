import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from 'pages/ErrorPage';
import App from 'app/ui/App';
import { OpenTask, CreateTaskComponent } from 'entities/tasks';
import LoginPage from 'pages/LoginPage/ui/LoginPage';
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
        element: <ProtectedRoute Component={<OpenTask taskId={43} />} />,
      },
      {
        path: '/plan/:task_id',
        element: <ProtectedRoute Component={<Analytics />} />,
      },
      {
        path: '/admin',
        element: <ProtectedRoute Component={<Analytics />} />,
      },
    ],
  },
]);
