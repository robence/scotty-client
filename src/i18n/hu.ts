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
        successAfter: 'sikeresen létrehozva.',
        error: 'Sikertelen címke létrehozás',
      },
    },
    user: {
      fetch: {
        error: 'Sikertelen felhasználó betöltés.',
      },
      register: {
        success: 'Sikeres regisztráció! Jelentkezzen be.',
      },
    },
  },
  layout: {
    header: {
      dashboard: 'Áttekintés',
      expense: 'Új tranzakció',
      tag: 'Új címke',
      account: 'Új számla',
      login: 'Bejelentkezés',
      logout: 'Kijelentkezés',
      register: 'Regisztráció',
    },
  },
  screens: {
    account: {
      title: 'Új számla létrehozása',
    },
    dashboard: {
      tabs: {
        chart: 'Grafikon',
        expense: 'Összes tranzakció',
        category: 'Tranzakciók kategóriák szerint',
        tag: 'Tranzakciók címkék szerint',
      },
      cards: {
        balance: 'Egyenleg',
        money: 'Pénzmozgás',
        account: 'Számla kiválasztása',
        period: 'Időszak kiválasztása',
      },
    },
    expense: {
      new: 'Új tranzakció létrehozása',
      common: 'Gyakori tranzakció hozzáadása',
    },
    tag: {
      title: 'Új címke létrehozása',
    },
    register: {
      title: 'Új felhasználó létrehozása',
    },
    login: {
      title: 'Bejelentkezés',
    },
  },
  assets: {
    period: {
      day: 'Utolsó nap',
      week: 'Utolsó 7 nap',
      month: 'Utolsó 30 nap',
      year: 'Utolsó 365 nap',
      full: 'Teljes időszak',
    },
  },
  components: {
    forms: {
      account: {
        placeholder: 'Gépelje be az új számla nevét',
        create: 'Létrehozás',
        select: 'Kiválasztás',
      },
      expense: {
        amount: {
          title: 'Összeg',
          placeholder: 'Írjon be egy összeget',
        },
        radio: {
          plus: 'Bevétel',
          minus: 'Kiadás',
        },
        category: {
          title: 'Kategória',
        },
        tag: {
          title: 'Címkék',
          placeholder: 'Válasszon címkéket',
        },
        account: {
          title: 'Számla',
        },
        create: 'Létrehozás',
      },
      tag: {
        label: 'Ez a címke már létezik. Adjon meg egy másikat.',
        placeholder: 'Gépeljen be egy új címkét',
        create: 'Létrehozás',
      },
      login: {
        username: 'felhasználónév',
        password: 'jelszó',
        submit: 'Bejelentkezés',
      },
      register: {
        email: 'email',
        username: 'felhasználónév',
        password: 'jelszó',
        submit: 'Regisztráció',
      },
    },
    tables: {
      amount: 'Összeg',
      category: 'Kategória',
      tags: 'Címkék',
      created: 'Létrehozva',
    },
  },
};

export default hu;
