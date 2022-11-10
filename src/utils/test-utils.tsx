import { createMemoryHistory, ReactLocation, Router } from '@tanstack/react-location';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ReactElement } from 'react';
import { vi } from 'vitest';

import { routes } from '../routes';

export const user = userEvent.setup();

export const renderWithRouter = (
  ui: ReactElement,
  { initialEntries = ['/'], options = {} },
) => {
  const history = createMemoryHistory({ initialEntries });
  const location = new ReactLocation({ history });
  return {
    ...render(ui, {
      wrapper: ({ children }) => (
        <Router location={location} routes={routes}>
          {children}
        </Router>
      ),
      ...options,
    }),
  };
};

export const mockUseMatch = () => {
  vi.mock('@tanstack/react-location', async () => {
    const mockRouter = await vi.importActual<typeof import('@tanstack/react-location')>(
      '@tanstack/react-location',
    );
    return {
      ...mockRouter,
      useMatch: () => ({ params: {} }),
    };
  });
};

export * from '@testing-library/react';
