import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';

describe('Input Component', () => {
  it('renders', () => {
    render(<Input />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { container } = render(<Input placeholder="Snapshot Input" />);
    expect(container).toMatchSnapshot();
  });

  it('handles user input correctly', () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);
    const inputElement = screen.getByRole('textbox');

    fireEvent.change(inputElement, { target: { value: 'test input' } });
    expect(handleChange).toHaveBeenCalled();
    expect(inputElement).toHaveValue('test input');
  });
});
