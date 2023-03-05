import { Outlet } from 'react-router-dom';
import Static from '../Static/Static';

const Layout = () => {
  return (
    <div className='layout'>
        <div className="layout-content">
          <Static />
          <Outlet />
        </div>
    </div>
  )
}

export default Layout