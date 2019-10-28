import { useSelector } from 'react-redux';

import en from '../i18n/en';
import hu from '../i18n/hu';
import { State } from '../store/initialState';

export type Lang = typeof en;
export type Langs = Record<string, Lang>;

export const langs: Langs = {
  hu,
  en,
};

export default function useLang(): Lang {
  const { lang } = useSelector((state: State) => state);
  return langs[lang];
}
