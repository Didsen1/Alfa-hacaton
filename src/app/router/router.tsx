import App from 'app/ui/App';
import { Quotes } from 'entities/quotes';
import { ErrorPage } from 'pages/ErrorPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'counter',
        element: <Quotes />,
      },
      {
        path: 'quotes',
        element: <Quotes />,
      },
    ],
  },
]);
