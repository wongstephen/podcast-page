import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';

const cn = (...args: ClassValue[]): string => clsx(...args);

export { cn };
