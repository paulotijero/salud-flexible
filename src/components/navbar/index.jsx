import { Outlet } from 'react-router-dom';

export default function Index() {
  return (
    <>
      <h1>Navbar</h1>
      <Outlet />
    </>
  );
}
