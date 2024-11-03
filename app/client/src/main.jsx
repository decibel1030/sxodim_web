import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import "./assets/css/index.css"
import "./assets/css/content.css"
import App from './App.jsx'
import ErrorPage from "./pages/ErrorPage.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
