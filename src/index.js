import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Category from './components/Category/Category';
import Product from './components/Product/Product';
import RandomProducts from './components/RandomProducts/RandomProducts';
import SearchResults from './components/SearchResults/SearchResults';

const router = createBrowserRouter
(
  [
    {
      path: '/',
      element: <App/>,
      errorElement: <h1>Not Found!!!</h1>,
      children:
      [
        {
          path: '/',
          element: <RandomProducts/>
        },
        {
          path: '/category/:id',
          element: <Category/>
        },
        {
          path: '/product/:id',
          element: <Product/>
        },
        {
          path: '/searching-results/:query',
          element: <SearchResults/>
        }
      ]
    },
  ]
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render
(
    <RouterProvider router={router}/>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
