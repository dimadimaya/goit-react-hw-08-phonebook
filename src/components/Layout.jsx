import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBarComponent } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div style={{ margin: '0 auto' }}>
      <AppBarComponent />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
  );
};
