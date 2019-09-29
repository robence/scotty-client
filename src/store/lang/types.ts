const SELECT_LANG = 'SELECT_LANG';
export default SELECT_LANG;

export interface SelectLangAction {
  type: typeof SELECT_LANG;
  lang: string;
}

export type LangActionTypes = SelectLangAction;
