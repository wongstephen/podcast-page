import { type Language } from '@/lib/utilities/dictionaries/types';
import en from '@/lib/utilities/dictionaries/en.json';

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
    console.log(new Error(`Language ${lang} not found.`));
    // TODO: send to logging service and return default language
  }
  return dictionaries[lang || 'en'];
};
