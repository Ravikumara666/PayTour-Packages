import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookingForm from './pages/BookingForm';
import Blogdeteles from './components/Blogdeteles';
import Checkout from './pages/Checkout';
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import ContactForm from './pages/ContactForm';
//import Blogdeteles from './components/Blogdeteles';

const root = ReactDOM.createRoot(document.getElementById('root'));

let allRouter=createBrowserRouter(
  [
    {
        path:'/',
        element:<HomePage/>
    },
    {
      path:'/plan/:id',
      element:<BookingForm/>
    },
    {
      path:'/checkout',
      element:<Checkout/>
    },
    {
      path:'/about-us',
      element:<AboutUs/>
    }
    ,
    {
      path:'/gallery',
      element:<Gallery/>
    }
    ,
    {
      path:'/success',
      element:<Success/>
    }
    ,
    {
      path:'/cancel',
      element:<Cancel/>
    },
    {
      path:'/Contact',
      element:<ContactForm/>
    }
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={allRouter}/>
  </React.StrictMode>
);

reportWebVitals();
