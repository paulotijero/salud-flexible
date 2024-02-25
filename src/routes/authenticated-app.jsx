import { Navigate, Route, Routes } from 'react-router-dom';

import Navbar from '../components/navbar';
import Plans from '../pages/plans';
import Summary from '../pages/summary';

export default function AuthenticatedApp() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Navigate to="/plans" replace={true} />} />
        <Route path="plans" element={<Plans />} />
        <Route path="summary" element={<Summary />} />

        <Route path="*" element={<Navigate to="/plans" replace={true} />} />
      </Route>
    </Routes>
  );
}
