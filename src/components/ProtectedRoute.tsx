import { Navigate } from '@tanstack/react-location';
import { FC, ReactElement, useEffect } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';
import { useAuthStore } from '../store/authStore';

// eslint-disable-next-line @typescript-eslint/ban-types
const ProtectedRoute: FC<{ children: ReactElement }> = ({ children }) => {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);
  const [logged] = useLocalStorage('logged', '');

  useEffect(() => {
    if (!logged && user) {
      setUser(null);
    }
  }, [logged, user, setUser]);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
