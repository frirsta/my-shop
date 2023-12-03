import React from "react";
import {
  Link,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ProductsList, productsLoader } from "./components/products/Products";
import Home from "./pages/Home";
import { Product, productDetailsLoader } from "./components/Product";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route
          path="/products"
          loader={productsLoader}
          element={<ProductsList />}
        />
        <Route
          loader={productDetailsLoader}
          path="/:productId"
          element={<Product />}
        />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

const Root = () => {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
