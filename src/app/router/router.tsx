import App from 'app/ui/App';
import { Quotes } from 'entities/quotes';
import { ErrorPage } from 'pages/ErrorPage';
import { createBrowserRouter } from 'react-router-dom';
import Analytics from 'widgets/Analytics';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'analytics',
        element: <Analytics />,
      },
      {
        path: 'quotes',
        element: <Quotes />,
      },
    ],
  },
]);
