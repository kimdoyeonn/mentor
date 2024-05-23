import { Outlet } from 'react-router-dom'
import './App.css'

function Layout() {
  return (
    <>
      <div>Header</div>
      <Outlet />
      <div>footer</div>
    </>
  )
}

export default Layout
