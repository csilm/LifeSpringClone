import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';

const DashboardHome = () => {
   return (
      <div className='flex justify-start min-h-screen '>
         <Sidebar />
         <div className='w-full px-4 md:px-8 lg:px-14'>
            <Outlet />
         </div>
      </div>
   );
};

export default DashboardHome;
