'use client';

import React, { useState, useRef, useEffect } from 'react';
import { DownArrowIcon } from '@/lib/components/atoms/Icons/DownArrowIcon';

import styles from './Dropdown.module.css';
import { sortByOptionType } from '@/lib/types/podcast';
import { dropdownOptionsMap } from '@/lib/constants/podcasts';
import { getDictionary } from '@/lib/utilities/dictionaries/dictionaries';

function Dropdown({
  sortByOption,
}: {
  sortByOption: (option: sortByOptionType) => void;
}) {
  const dict = getDictionary('en');

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<sortByOptionType | null>(
    null
  );

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (option: sortByOptionType) => {
    setSelectedOption(option);
    setIsOpen(false);
    sortByOption(option);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className={styles.dropdownContainer}>
      <button onClick={toggleDropdown} className={styles.sortButton}>
        {(selectedOption && dropdownOptionsMap[selectedOption]) ||
          dict.common.sortBy}
        <DownArrowIcon className={styles.expandIcon} />
      </button>
      {isOpen && (
        <ul className={styles.dropdownListContainer}>
          {Object.keys(dropdownOptionsMap).map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option as sortByOptionType)}
              className={styles.dropdownListItem}
            >
              {dropdownOptionsMap[option as sortByOptionType]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
