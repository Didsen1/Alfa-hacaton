import App from 'app/ui/App';
import { Quotes } from 'entities/quotes';
import { ErrorPage } from 'pages/ErrorPage';
import { createBrowserRouter } from 'react-router-dom';
import AdminPage from 'pages/AdminPage';
import AdminAnalyticsPage from 'pages/AdminAnalyticsPage';
import AdminPlanPage from 'pages/AdminPlanPage';
import PlanPage from 'pages/PlanPage';

export const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <PlanPage />,
      },
      {
        path: '/Admin',
        element: <AdminPage />,
        children: [
          {
            path: 'Analytics',
            element: <AdminAnalyticsPage />,
          },
          {
            path: 'AdminPlanPage',
            element: <AdminPlanPage />,
          },
        ]
      },
    ],
  },
]);
