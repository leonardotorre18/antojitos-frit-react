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
import ValidationUser from "../components/errors/ValidationUser";

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
        element: 
          // <ValidationUser to="/login">
            <CartView />
          // </ValidationUser>
      },
      {
        path: 'login/',
        element: 
          <ValidationUser invert to="/cart">
            <SignInView />,
          </ValidationUser>
      },
      {
        path: 'register/',
        element: 
          <ValidationUser invert to="/cart">
            <SignUpView />
          </ValidationUser>
      },
    ],
  }
]);

const Routes = () => <RouterProvider router={router} />

export default Routes
