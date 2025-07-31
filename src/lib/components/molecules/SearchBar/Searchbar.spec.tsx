import { render } from '@testing-library/react';

import SearchBar from './SearchBar';

describe('SearchBar Component', () => {
  it('renders correctly', () => {
    const { container } = render(<SearchBar />);
    expect(container).toBeVisible();
  });

  it('matches snapshot', () => {
    const { container } = render(<SearchBar />);
    expect(container).toMatchSnapshot();
  });
});
