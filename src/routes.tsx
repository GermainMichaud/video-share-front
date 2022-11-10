import { MakeGenerics, Navigate, ReactLocation, Route } from '@tanstack/react-location';
import { ReactElement } from 'react';

import ProtectedRoute from './components/ProtectedRoute';
import Highlights from './pages/Highlights';
import Login from './pages/Login';

// eslint-disable-next-line @typescript-eslint/ban-types
export type LocationGenerics = MakeGenerics<{
  RouteMeta: {
    breadcrumb: (params: LocationGenerics) => ReactElement;
  };
}>;

export const location = new ReactLocation<LocationGenerics>();

export const routes: Route<LocationGenerics>[] = [
  {
    path: '/',
    element: <Navigate to="/highlights" />,
  },
  {
    path: '/highlights',
    element: (
      <ProtectedRoute>
        <Highlights />
      </ProtectedRoute>
    ),
    meta: {
      breadcrumb: () => <span>Highlights</span>,
    },
  },
  {
    path: '/login',
    element: <Login />,
    meta: {
      breadcrumb: () => <span>Login</span>,
    },
  },
  {
    path: '*',
    element: <Navigate to="/highlights" />,
  },
];
