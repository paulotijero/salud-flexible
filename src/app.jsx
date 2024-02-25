import { Suspense, lazy } from 'react';

const AuthenticatedApp = lazy(() => import('./routes/authenticated-app'));
const UnauthenticatedApp = lazy(() => import('./routes/unauthenticated-app'));

function App() {
  const user = false;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </Suspense>
  );
}

export default App;
