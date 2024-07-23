import Cart from "./views/Cart";
import Home from "./views/Home";
import Details from "./views/Details";
import Onsale from "./views/OnSale";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./views/NotFound";
import store from "./store/index";
import { Provider } from "react-redux";

function App() {
  const browserRouter  = createBrowserRouter([
    { path: "/" , element: <Home /> },
    { path: "/details/:id" , element: <Details />},
    { path: "/cart" , element: <Cart /> },
    { path: "/onSale", element: <Onsale /> },
    { path: "/*" , element: <NotFound /> }
  ])
  return (
    <Provider store={store}>
      <RouterProvider router={browserRouter} />
    </Provider>
  )
}

export default App
