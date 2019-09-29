import SELECT_LANG, { SelectLangAction } from './types';

export default function selectLang(lang: string): SelectLangAction {
  return {
    type: SELECT_LANG,
    lang,
  };
}
