import { atom } from 'nanostores';

const initialValue: string = 'en_US';

const language = atom(initialValue);

const setLanguage = function setLanguage(lang: string) {
  language.set(lang)
}

export { language, setLanguage };
