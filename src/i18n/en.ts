const en = {
  sagas: {
    account: {
      add: {
        successBefore: 'Account',
        successAfter: 'was successfully created.',
        error: 'Could not create account.',
      },
      select: {
        success: 'is now the default account.',
        error: 'Could not select accounts',
      },
    },
    category: {
      fetch: {
        error: 'Could not load categories from server',
      },
    },
    expense: {
      fetch: {
        error: 'Could not load expenses from server',
      },
      add: {
        success: 'Transaction was successfully created.',
        error: 'Could not save transaction.',
      },
    },
    tag: {
      add: {
        successBefore: 'Tag',
        successAfter: 'was successfully created.',
        error: 'Could not create tag.',
      },
    },
    user: {
      fetch: {
        error: 'Could not load user from server',
      },
      register: {
        success: 'Registration was successful. Please log in.',
      },
    },
  },
  layout: {
    header: {
      dashboard: 'Dashboard',
      expense: 'New Transaction',
      tag: 'New Tag',
      account: 'New Account',
      login: 'Login',
      logout: 'Logout',
      register: 'Register',
    },
  },
  screens: {
    account: {
      title: 'Create or Select account',
    },
    dashboard: {
      tabs: {
        chart: 'Chart',
        expense: 'All Expenses',
        category: 'Expenses by Categories',
        tag: 'Expenses by Tags',
      },
      cards: {
        balance: 'Current Balance',
        money: 'Money Flow',
        account: 'Select Account',
        period: 'Select Period',
      },
    },
    expense: {
      new: 'Add New Transaction',
      common: 'Add Common Transaction',
    },
    tag: {
      title: 'Create a new tag',
    },
    register: {
      title: 'Register a new user',
    },
    login: {
      title: 'Log in',
    },
  },
  assets: {
    period: {
      day: 'Last day',
      week: 'Last 7 days',
      month: 'Last 30 days',
      year: 'Last 365 days',
      full: 'Full history',
    },
  },
  components: {
    forms: {
      account: {
        placeholder: 'Type to create a new account:',
        create: 'Create',
        select: 'Select',
      },
      expense: {
        amount: {
          title: 'Amount',
          placeholder: 'Enter Amount',
        },
        radio: {
          plus: 'Income',
          minus: 'Expense',
        },
        category: {
          title: 'Category',
        },
        tag: {
          title: 'Tags',
          placeholder: 'Select tags',
        },
        account: {
          title: 'Account',
        },
        create: 'Create',
      },
      tag: {
        label: 'This tag already exists. Please enter a new one.',
        placeholder: 'Type to create a new tag',
        create: 'Create',
      },
      login: {
        username: 'username',
        password: 'password',
        submit: 'Login',
      },
      register: {
        email: 'email',
        username: 'username',
        password: 'password',
        submit: 'Register',
      },
    },
    tables: {
      amount: 'Amount',
      category: 'Category',
      tags: 'Tags',
      created: 'added',
    },
  },
};

export default en;
