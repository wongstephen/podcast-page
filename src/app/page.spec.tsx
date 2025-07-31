import { render } from '@testing-library/react';
import Page from './page';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/podcast'),
}));

describe('sanity', () => {
  it('renders', () => {
    const { baseElement } = render(<Page />);
    expect(baseElement).toBeTruthy();
  });

  it('matches snapshot', () => {
    const { container } = render(<Page />);
    expect(container).toMatchSnapshot();
  });
});
