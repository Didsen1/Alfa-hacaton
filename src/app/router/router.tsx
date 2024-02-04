import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from 'pages/ErrorPage';
import App from 'app/ui/App';
import LoginPage from 'pages/LoginPage';
import Analytics from 'widgets/Analytics';
import AdminPage from 'pages/AdminPage';
import PlanPage from 'pages/PlanPage';
import Sidebar from 'widgets/Sidebar';
import { OpenTask } from 'entities/tasks';
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
        children: [
          {
            path: '/plan/:task_id',
            element: <ProtectedRoute Component={<Sidebar><OpenTask /></Sidebar>} />,
          },
        ]
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
