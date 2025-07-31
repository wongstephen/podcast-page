import { type Language } from '@/lib/utilities/dictionaries/types';
import en from '@/lib/utilities/dictionaries/en.json';
import { logError } from '../logger';

/**
 *
 * Gets the dictionary for specific language.
 * This function can be replaced with internalization lib.
 */
export const getDictionary = (lang: Language) => {
  const dictionaries = {
    en,
  };

  if (!dictionaries[lang]) {
    const error = new Error(`Language ${lang} not found.`);
    logError(error);
  }
  return dictionaries[lang || 'en'];
};
