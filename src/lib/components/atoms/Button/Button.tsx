import React from 'react';
import { Slot } from '@radix-ui/react-slot';

import styles from './Button.module.css';

type ButtonSizes = 'small' | 'medium';

type ButtonAppearance = 'primary' | 'outline' | 'outline-secondary';

export type ButtonProps = {
  /**
   * A button can have different appearances and passed custom content.
   * - 'primary (default)': Primary button action emphasis.
   * - 'outline': Button removing the background.
   * - 'outline-secondary': A secondary outline button.
   * @default 'primary'
   */
  appearance?: ButtonAppearance;

  /**
   * Disables the button, preventing any interaction.
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * Button size options
   *
   * @default 'medium'
   */
  size?: ButtonSizes;
  /**
   * Slot for the button content. When true, the styling will be applied to the child element.
   *
   * @default: false
   */
  asChild?: boolean;
} & React.ComponentProps<'button'>;

const Button = ({
  appearance = 'primary',
  asChild = false,
  children,
  disabled,
  size = 'medium',
  ...props
}: ButtonProps): React.JSX.Element => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={styles['container']}
      data-appearance={appearance}
      data-disabled={disabled}
      data-size={size}
      disabled={disabled}
      {...props}
    >
      {children}
    </Comp>
  );
};

Button.displayName = 'Button';

export default Button;
