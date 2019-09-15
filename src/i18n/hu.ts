const hu = {
  sagas: {
    account: {
      add: {
        successBefore: 'Számla',
        successAfter: 'sikeresen létrehozva.',
        error: 'Sikertelen létrehozás.',
      },
      select: {
        success: 'az alapértelmezett számla.',
        error: 'Sikertleen számla választás.',
      },
    },
    category: {
      fetch: {
        error: 'Sikertelen kategória betöltés.',
      },
    },
    expense: {
      fetch: {
        error: 'Sikertelen tranzakció letöltés.',
      },
      add: {
        success: 'Tranzakció sikeresen létrehozva.',
        error: 'Sikertelen tranzakció létrehozás.',
      },
    },
    tag: {
      add: {
        successBefore: 'Címke',
        successAfter: 'sikeresen étrehozva.',
        error: 'Sikertelen címke létrehozás',
      },
    },
    user: {
      fetch: {
        error: 'Sikertelen felhasználó betöltés.',
      },
    },
  },
  layout: {
    header: {
      dashboard: 'Áttekintés',
      expense: 'Új tranzakció',
      tag: 'Új címke',
      account: 'Új számla',
    },
  },
  screens: {
    account: {
      title: 'Válassz vagy hozz létre számlát',
    },
    dashboard: {
      tabs: {
        chart: 'Grafikon',
        expense: 'Összes tranzakció',
        category: 'Tranzakciók (kategória)',
        tag: 'Tranzakciók (címke)',
      },
      cards: {
        balance: 'Egyenleg',
        money: 'Pénzmozgás',
        account: 'Számla kiválasztása',
        period: 'Időtartam kiválasztása',
      },
    },
    expense: {
      new: 'Új tranzakció létrehozása',
      common: 'Gyakori tranzakció hozzáadása',
    },
    tag: {
      title: 'Új címke létrehozása',
    },
  },
};

export default hu;
