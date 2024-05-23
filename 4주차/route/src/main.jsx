import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import HelpPage from './HelpPage.jsx'
import RoomDetailPage from './RoomDetailPage.jsx'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'

export const ROOM_LIST = [
  {
    id: 1,
    title: '페라리 박물관에서 보내는 하룻밤'
  },
  {
    id: 2,
    title: '페라리 박물관에서 보내는 하룻밤'
  },
  {
    id: 3,
    title: '페라리 박물관에서 보내는 하룻밤'
  },
  {
    id: 4,
    title: '페라리 박물관에서 보내는 하룻밤'
  },
  {
    id: 5,
    title: '페라리 박물관에서 보내는 하룻밤'
  }
]

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: '/help',
        element: <HelpPage />
      },
      {
        path: '/rooms',
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <h1>RoomList</h1>
          },
          {
            path: ':roomId',
            element: <RoomDetailPage />
          }
        ]
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
