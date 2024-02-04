import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from 'pages/ErrorPage';
import App from 'app/ui/App';
import LoginPage from 'pages/LoginPage';
import Analytics from 'widgets/Analytics';
import PlanPage from 'pages/PlanPage';
import AdminPage from 'pages/AdminPage';
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
        element: <ProtectedRoute Component={<PlanPage />} />,
      },
      {
        path: '/plan/:task_id',
        element: <ProtectedRoute Component={<PlanPage />} />,
      },
      {
        path: '/admin',
        element: <ProtectedRoute Component={<AdminPage />} />,
      },
      {
        path: '/admin/analytics',
        element: <ProtectedRoute Component={<Analytics />} />,
      },
    ],
  },
]);
