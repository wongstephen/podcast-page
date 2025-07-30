import React from 'react';
import { Input } from '../../atoms/Input/Input';
import { SearchIcon } from '../../atoms/Icons/Search';
import { cn } from '@/lib/utilities/cn';
import styles from './SearchBar.module.css';

export default function SearchBar({
  className,
  placeholder = 'Search',
  value,
  onChange,
}: React.ComponentProps<'input'>) {
  return (
    <div className={styles.container}>
      <Input
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={cn(styles.input, className)}
      />
      <div className={styles.iconContainer}>
        <SearchIcon aria-hidden="true" className={styles.icon} />
      </div>
    </div>
  );
}
