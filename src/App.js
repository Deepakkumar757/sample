import React from 'react'
import './App.css'
import Calculator from './components/Calculator'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import VideoStream from './components/videoStream'
import CrudeInLocalStorage from './components/crud_in_ls'
import ToDo from './components/do_to_list'
const errorElement = <div className="main_page">Something Went Wrong</div>
const route = [
  {
    path: "/",
    element: <>Home</>,
    errorElement
  },
  {
    path: "/calculator",
    element: <Calculator />,
    errorElement
  },
  {
    path: "/video",
    element: <VideoStream />,
    errorElement
  },
  {
    path:"/to_do",
    element: <ToDo/>,
    errorElement
  },
  {
    path:"/crud_in_ls",
    element: <CrudeInLocalStorage/>,
    errorElement
  }

]
const App = () => {
  return (
    <div className='main_page'>  <RouterProvider router={createBrowserRouter(route)} />
    </div>

  )
}
export default App