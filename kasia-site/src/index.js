import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Root from './routes/Root';
import ErrorPage from "./error-page";
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Gallery from './routes/Gallery';
import Menus from './routes/Menus';
import './index.css';
import {
  // BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  { 
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [ 
      {index: true, element: <Home />},
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "menus",
        element: <Menus />,
      },
    ]
  }

  
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
