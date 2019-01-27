import Http from '../../services/HttpService';

const BASE_URL = 'http://localhost:5000/users';

class UserService {

  getAllUsers() {
    return Http.get(BASE_URL)
        .then(res => res)
        .catch(error => console.error('UserService -> getAllUsers:', error));
  }
}

const instance = new UserService();
export default instance;
