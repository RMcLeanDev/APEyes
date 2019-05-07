import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import {createStore} from 'redux';

const store = createStore(rootReducer);

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
