import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'; // Import the App component
import Hem from './Components/Hem';
import Contact from './Components/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Include the App component as the layout
    children: [
      {
        path: "/",
        element: <Hem />, // Route for Hem component
      },
      {
        path: "/contact",
        element: <Contact />, // Route for Contact component
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
