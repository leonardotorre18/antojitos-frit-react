import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from '../views/layout/MainLayout'
import HomeView from "../views/HomeView";
import ProductsView from "../views/ProductsView"
import CartView from "../views/CartView";
import ProductIdView from "../views/ProductIdView";
import SignView from "../views/SignView";
import FormLogin from "../components/forms/FormLogin";
import FormRegister from "../components/forms/FormRegister";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <div>Error</div>,
    children: [
      {
        index: true,
        element: <HomeView />
      },
      {
        path: 'products/',
        element: <ProductsView />,
      },
      {
        path: 'products/:idparam',
        element: <ProductIdView />
      },
      {
        path: 'cart/',
        element: <CartView />
      },
      {
        path: 'login/',
        element: <SignView />,
        children: [
          {
            path: 'signin/',
            element: <FormLogin />,
          },
          {
            path: 'signup/',
            element: <FormRegister />
          }
        ]
      },
    ],
  }
]);

const Routes = () => <RouterProvider router={router} />

export default Routes
