import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/rootReducer';

const store = createStore(rootReducer);
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
