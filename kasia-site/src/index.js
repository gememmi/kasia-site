import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorPage from "./error-page";
import './index.css';
import App from './App';
import Contact from './components/Contact.js';
import Gallery from './components/Gallery.js';
import Menus from './components/Menus.js';
import About from './components/About.js';
import LandingPage from './components/LandingPage.js';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  { 
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [ 
      {
        path:'contact',
        element: <Contact />,
        errorElement: <ErrorPage />
      },
      {
        path:'gallery',
        element: <Gallery />,
        errorElement: <ErrorPage />
      },
      {
        path:'about',
        element: <About />,
        errorElement: <ErrorPage />
      },
      {
        path:'menus',
        element: <Menus />,
        errorElement: <ErrorPage />
      },
      {
        path:'landing',
        element: <LandingPage />,
        errorElement: <ErrorPage />
      }

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
