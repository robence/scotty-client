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
    },
  },
  layout: {
    header: {
      dashboard: 'Dashboard',
      expense: 'New Transaction',
      tag: 'New Tag',
      account: 'New Account',
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
  },
};

export default en;
