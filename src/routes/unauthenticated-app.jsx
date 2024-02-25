import { Navigate, Route, Routes } from 'react-router-dom';

import Homepage from '../pages/homepage';

export default function UnauthenticatedApp() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Navigate to="/homepage" replace={true} />} />
        <Route path="homepage" element={<Homepage />} />

        <Route path="*" element={<Navigate to="/homepage" replace={true} />} />
      </Route>
    </Routes>
  );
}
