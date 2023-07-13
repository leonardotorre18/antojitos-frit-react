import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from '../views/layout/MainLayout'
import HomeView from "../views/HomeView";
import ProductsView from "../views/ProductsView"
import CartView from "../views/CartView";
import ProductIdView from "../views/ProductIdView";
import SignInView from "../views/SignInView";
import SignUpView from "../views/SignUpView";

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
        element: <SignInView />,
      },
      {
        path: 'register/',
        element: <SignUpView />
      },
    ],
  }
]);

const Routes = () => <RouterProvider router={router} />

export default Routes
