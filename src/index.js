import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configreStore';
import initialState from './store/state';
import { Provider } from 'react-redux';

const store = configureStore(initialState);

ReactDOM.render(
<Provider store={store}>
  <h1>ao</h1>
</Provider>
,document.getElementById('root'));