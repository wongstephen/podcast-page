import { render } from '@testing-library/react';
import Page from './page';
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
