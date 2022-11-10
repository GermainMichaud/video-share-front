import Highlights from '../../pages/Highlights';
import { render } from '../../utils/test-utils';

describe('Highlights Page', () => {
  it('should pass', () => {
    const { getByText } = render(<Highlights />);
    expect(getByText(/share on tiktok/i)).toBeInTheDocument();
  });
});
