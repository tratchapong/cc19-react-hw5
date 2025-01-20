import {createBrowserRouter, Outlet, RouterProvider} from 'react-router'
import App from './App'

const router = createBrowserRouter([
  { 
    path: '/' ,
    element: <>
      <h1>Header</h1>
      <hr />
      <Outlet />
    </>,
    errorElement: <p>Not Found</p>,
    children: [
      { index: true, element: <App />},
      { path: 'about', element: <p>About us</p> },
      { path: 'contact', element: <p>Contact</p>},
      { path: 'product/:id', element: <p>Product...</p>}
    ]
  },
])


export default function AppRouter() {
  return (
    <RouterProvider router={router} />
  )
}
