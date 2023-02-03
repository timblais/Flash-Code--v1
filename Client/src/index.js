import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import Root from './routes/root';
import Goals from './routes/goals';
import Reflect from './routes/reflect';
import ToDo from './routes/todo';
import Study from './routes/study';
import DeckView from './routes/deckView';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "goals",
    element: <Goals />,
  },
  {
    path: "reflect",
    element: <Reflect />,
  },
  {
    path: "todo",
    element: <ToDo />,
  },
  {
    path: "study",
    element: <Study />,
  },
  {
    path: "study/:deckName",
    element: <DeckView />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

