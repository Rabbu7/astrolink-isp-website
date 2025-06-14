import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
     return (
          <div className='min-h-screen mx-auto'>
               
               <Outlet></Outlet>
               
          </div>
     );
};

export default MainLayout;