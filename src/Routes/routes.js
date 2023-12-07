import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Category from "../Pages/Category";

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/category/:cat" element={<Category />} />
</Routes>;
const Routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/category/:cat",
    element: <Category />,
  },
];

export default Routes;
