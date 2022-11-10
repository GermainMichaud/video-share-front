import App from '../../App';
import { renderWithRouter } from '../../utils/test-utils';

describe('App', () => {
  it('should pass', () => {
    const { getByText } = renderWithRouter(<App />, { initialEntries: ['/'] });
    expect(getByText(/video share/i)).toBeInTheDocument();
  });
});
