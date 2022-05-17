import { atom } from 'nanostores';

export interface LanguageProps {
  value: string;
  label: string;
}

const initialValue: LanguageProps = {
  value: 'en_US',
  label: 'English'
};

const language = atom(initialValue);

const setLanguage = function setLanguage(langObj: LanguageProps) {
  language.set(langObj)
}

export { language, setLanguage };
