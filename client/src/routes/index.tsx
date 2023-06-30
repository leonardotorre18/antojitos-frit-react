import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from '../views/layout/MainLayout'
import HomeView from "../views/HomeView";
import ProductsView from "../views/ProductsView"

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <div>Error</div>,
    children: [
      {
        index: true,
        element: <HomeView />
      }, {
        path: 'products/',
        element: <ProductsView />
      }, {
        path: 'cart/',
        element: <div>Ruta de Cart</div>
      }
    ],
  }
]);

const Routes = () => <RouterProvider router={router} />

export default Routes
