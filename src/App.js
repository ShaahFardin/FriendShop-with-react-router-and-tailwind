import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Friends from "./components/Friends/Friends";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Main from "./Layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/friends",
          element: <Friends></Friends>,
        },
        {
          path: "/shop",
          element: <Shop></Shop>,
        },

        {
          path: "/contact",
          element: <Contact></Contact>,
        },

        {
          path: "/about",
          element: <About></About>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
