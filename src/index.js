import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configreStore';
import initialState from './store/state';
import { Provider } from 'react-redux';
import Root from './apps/containers/templates/Root'

const store = configureStore(initialState);

ReactDOM.render(
<Provider store={store}>
  <Root />
</Provider>
,document.getElementById('root'));