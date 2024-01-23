import App from 'app/ui/App';
import { Counter } from 'components/counter';
import { Quotes } from 'components/quotes';
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
        element: <Counter />,
      },
      {
        path: 'quotes',
        element: <Quotes />,
      },
    ],
  },
]);
