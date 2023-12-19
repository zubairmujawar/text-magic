import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Components/Home'
import About from './Components/About'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
// import Contact from './Components/Contact';
import Page404 from './Components/Page404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children : [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>
      },
      // {
      //   path: 'contact' ,
      //   element: <Contact/>
      // }
      {
        path:"*",
        element: <Page404/>
      }
    ]

  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
</React.StrictMode>)
  
