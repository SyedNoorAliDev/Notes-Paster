import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavBar from './Components/Navbar'
import Home from './Components/Home'
import Paste from './Components/Paste'
import ViewPaste from './Components/ViewPaste'
import './App.css'


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: 
      <>
      <NavBar />
      <Home />
      </>,
      errorElement: <div>Not Found</div>
    },
    {
      path: '/pastes',
      element: 
      <>
      <NavBar />
      <Paste />
      </>,
      errorElement: <div>Not Found</div>
    },
    {
      path: '/pastes/:id',
      element: 
      <>
      <NavBar />
      <ViewPaste />
      </>,
      errorElement: <div>Not Found</div>
    }
  ]
);


const App = () => {
  return <RouterProvider router={router} />;
}

export default App