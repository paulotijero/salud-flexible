import { Suspense, lazy } from 'react';

import { useAuth } from './contexts/auth-context';

const AuthenticatedApp = lazy(() => import('./routes/authenticated-app'));
const UnauthenticatedApp = lazy(() => import('./routes/unauthenticated-app'));

function App() {
  const { user } = useAuth();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </Suspense>
  );
}

export default App;
