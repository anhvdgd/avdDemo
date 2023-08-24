import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import Layout from './Layout/Layout';
import Home from './Home/Home';
import Playground from './Playgound/Playground';
import ErrorPage from './Home/Error';
import Bag from './Bag/Bag';
import * as dotenv from "dotenv";
dotenv.config();
console.log(process.env.SECRET_CODE);

const router = createBrowserRouter([
  {
    element: <Layout />,
    //path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
      },
      {
        path: "/home",
        element: <Home />,
        errorElement: <ErrorPage />
      },
      {
        path: "/playground",
        element: <Playground />,
        errorElement: <ErrorPage />
      },
      {
        path: "/shop",
        element: <Bag />,
        errorElement: <ErrorPage />
      }
    ]
  }
])
=======
>>>>>>> parent of c35c7fc... redux first touch

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
