import React from 'react';

import style from './Input.module.css';
import { cn } from '@/lib/utilities/cn';

const Input = ({
  className,
  type = 'text',
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input type={type} className={cn(style.container, className)} {...props} />
);
Input.displayName = 'Input';

export { Input };
