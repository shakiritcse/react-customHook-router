import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import './index.css'
import { rootRouter } from './router/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={rootRouter}/>
  </StrictMode>,
)
