import Http from '../../services/HttpService';

const BASE_URL = 'http://localhost:5000/api/accounts';

export default class AccountService {
  static getAllAccounts() {
    return Http.get(BASE_URL)
      .then((res) => res)
      .catch((error) =>
        console.error('AccountService -> getAllAccounts:', error),
      );
  }

  static createAccount(data: any) {
    return Http.post(BASE_URL, data)
      .then((res) => console.log(res))
      .catch((error) =>
        console.error('AccountService -> createAccount:', error),
      );
  }

  static createUser(user: any) {
    return Http.post(BASE_URL, {
      data: user,
    });
  }
}

// const instance = new AccountService();
// export default instance;
