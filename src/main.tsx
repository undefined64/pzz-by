import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Error from './Pages/Error/Error.tsx';
import Cart from './Pages/Cart/Cart.tsx';
import Pizzas from './Pages/Pizzas/Pizzas.tsx';
import Burgers from './Pages/Burgers/Burgers.tsx';
import Snacks from './Pages/Snacks/Snacks.tsx';
import Drinks from './Pages/Drinks/Drinks.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/pzz-by',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/pzz-by',
        element: <Pizzas />,
      },
      {
        path: '/pzz-by/cart',
        element: <Cart />,
      },
      {
        path: '/pzz-by/burgers',
        element: <Burgers />,
      },
      {
        path: '/pzz-by/snacks',
        element: <Snacks />,
      },
      {
        path: '/pzz-by/drinks',
        element: <Drinks />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
