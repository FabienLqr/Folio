import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Me from "./pages/Me.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/me",
        element: <Me />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
