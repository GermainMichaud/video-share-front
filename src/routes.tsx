import { MakeGenerics, ReactLocation, Route } from '@tanstack/react-location';
import { ReactElement } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
export type LocationGenerics = MakeGenerics<{
  RouteMeta: {
    breadcrumb: (params: LocationGenerics) => ReactElement;
  };
}>;

export const location = new ReactLocation<LocationGenerics>();

export const routes: Route<LocationGenerics>[] = [];
