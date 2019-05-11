import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import middlewareLogger from './middleware/middleware-logger';

const store = createStore(rootReducer, applyMiddleware(middlewareLogger, thunkMiddleware));
export {store};
/* eslint-disable */
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
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
