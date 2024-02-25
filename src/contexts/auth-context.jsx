import { createContext, useState, useEffect, useContext } from 'react';

import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

function AuthProvider(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  useEffect(() => {
    if (user) logout();
  }, []);

  function login(credentials) {
    localStorage.setItem('user', JSON.stringify(credentials));
    setUser(credentials);
    navigate('/plans');
  }

  function logout() {
    setUser(null);
    navigate('/homepage');
  }

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
