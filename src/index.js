import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Components/Home'
import About from './Components/About'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';

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
      }
    ]

  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
</React.StrictMode>)
  
