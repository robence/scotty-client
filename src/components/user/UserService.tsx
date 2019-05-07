import Http from '../../services/HttpService';

const BASE_URL = 'http://localhost:5000/users';

export default class UserService {
  // getAllUsers() {
  static getAllUsers() {
    return Http.get(BASE_URL)
      .then((res) => res)
      .catch((error) => console.error('UserService -> getAllUsers:', error));
  }

  // createUser(user) {
  static createUser(user: any) {
    return Http.post(BASE_URL, {
      data: user,
    });
  }
}

// const instance = new UserService();
// export default instance;
