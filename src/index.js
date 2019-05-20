import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export {store};
/* eslint-disable */
let unsubscribe = store.subscribe(() =>
  store.getState()
);
/* eslint-enable */
const render = (Component) => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <Component />
      </Provider>
    </HashRouter>,
    document.getElementById('root')
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
