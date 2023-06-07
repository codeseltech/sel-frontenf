import { Outlet } from 'react-router';
import { Header } from '../header/Header';

export const SharedLayoutFeaCourses = () => {
  return (
    <div>
      <Header/>
      <Outlet />
      <h1>Footer</h1>
    </div>
  );
};
