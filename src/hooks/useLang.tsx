import { useSelector } from 'react-redux';

import en from '../i18n/en';
import hu from '../i18n/hu';

type Langs = Record<string, any>;

export const langs: Langs = {
  hu,
  en,
};

export default function useLang(): any {
  const { lang } = useSelector((state: any) => state);
  return langs[lang];
}
