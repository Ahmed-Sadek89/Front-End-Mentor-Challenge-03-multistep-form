import { Outlet } from 'react-router-dom';
import Static from '../Static/Static';

const Layout = () => {
  return (
    <div className='layout'>
        <div className="layout-content">
          <Static />
          <div className='layout-content-routes'>
            <Outlet />
          </div>
        </div>
    </div>
  )
}

export default Layout