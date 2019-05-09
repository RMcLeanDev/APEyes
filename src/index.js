import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import {createStore, applyMiddleware} from 'redux';
import middlewareLogger from './middleware/middleware-logger';
import thunkMiddleware from 'redux-thunk';
import Firebase, {FirebaseContext} from './Firebase';

const store = createStore(rootReducer, applyMiddleware(middlewareLogger, thunkMiddleware));

const render = (Component) => {
  ReactDOM.render(
    <HashRouter>
      <FirebaseContext.Provider value={new Firebase()}>
        <Provider store={store}>
          <Component />
        </Provider>
      </FirebaseContext.Provider>
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
