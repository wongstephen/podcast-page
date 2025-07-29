import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('matches snapshot', () => {
    const { container } = render(<Button>Snapshot Button</Button>);
    expect(container).toMatchSnapshot();
  });

  it('renders the button with the correct text', () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByText('Click Me');
    expect(buttonElement).toBeInTheDocument();
  });

  it('applies the correct appearance styles', () => {
    render(<Button data-appearance="primary">Primary Button</Button>);
    const buttonElement = screen.getByText('Primary Button');
    expect(buttonElement).toHaveClass('container');
    expect(buttonElement).toHaveAttribute('data-appearance', 'primary');
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const buttonElement = screen.getByText('Click Me');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('disables the button when disabled is true', () => {
    render(<Button disabled>Disabled Button</Button>);
    const buttonElement = screen.getByText('Disabled Button');
    expect(buttonElement).toBeDisabled();
  });
});
