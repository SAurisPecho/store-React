import Cart from "./views/Cart";
import Home from "./views/Home";
import Details from "./views/Details";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./views/NotFound";

function App() {
  const browserRouter  = createBrowserRouter([
    { path: "/" , element: <Home /> },
    { path: "/details/:id" , element: <Details />},
    { path: "/cart" , element: <Cart /> },
    { path: "/*" , element: <NotFound /> }
  ])
  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  )
}

export default App
