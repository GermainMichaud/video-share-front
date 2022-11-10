import { Outlet } from '@tanstack/react-location';
import { useEffect } from 'react';

import Breadcrumbs from './components/Breadcrumbs';
import Footer from './components/Footer';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import { useAuthStore } from './store/authStore';

const App = () => {
  const getUser = useAuthStore((state) => state.getUser);

  useEffect(() => {
    void getUser();
  }, [getUser]);

  return (
    <>
      <Header />
      <Wrapper>
        <Breadcrumbs />
        <Outlet />
      </Wrapper>
      <Footer />
    </>
  );
};

export default App;
