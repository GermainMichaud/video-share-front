import Login from '../../pages/Login';
import { render } from '../../utils/test-utils';

describe('Login Page', () => {
  it('should pass', () => {
    const { getByText } = render(<Login />);
    expect(getByText(/continue with tiktok/i)).toBeInTheDocument();
  });
});
