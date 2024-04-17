import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './pages/Login/index.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/index.jsx'
import Dashboard from './pages/Dashboard/index.jsx'
import LoginForm from './pages/Login/LoginForm.jsx'
import ForgetPassword from './pages/ForgetPassword/index.jsx'
import ForgetPasswordContextProvider from './context/ForgetPasswordContext.jsx'
import CheckNik from './pages/Dashboard/CheckNik.jsx'
import ProtectedRoutes from './ProtectedRoutes.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home title={"Pangkalan Elpiji Egi Rahayu"} />,

  },
  {
    path: "/login",
    element: <Login title={"Login - Pangkalan Elpiji Egi Rahayu"} />,
    // children:[
    //   {
    //     path:"/masuk/login",
    //     element: <LoginForm/>
    //   }
    // ]
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoutes>
        <Dashboard title={"Dashboard - Pangkalan Elpiji Egi Rahayu"} />
      </ProtectedRoutes>
    ),
    children: [{
      path: "/dashboard",
      element: <CheckNik />
    }]
  },
  {
    path: "/lupa-password",
    element: <ForgetPassword title={"Lupa Password - Pangkalan Elpiji Egi Rahayu"} />
  },
])

function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
