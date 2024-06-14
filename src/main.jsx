import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Hem from './Components/Hem';
import Contact from './Components/Contact';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Hem/>,
  },
  {
    path: "/Contact",
    element: <Contact/>,
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <App /> 
   <RouterProvider router={router} />
  
  </React.StrictMode>,
)
