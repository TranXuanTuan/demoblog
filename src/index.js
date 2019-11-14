import React, {Suspense } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import {Provider} from 'react-redux';

import combineReducers from './reducers';
import Loader from './components/loader';
import './index.css';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const store = createStore(combineReducers)

const App = React.lazy(() => {
    return new Promise(resolve => setTimeout(resolve, 2 * 1000)).then(
      () => import('./App')
    );
  });

ReactDOM.render(
  <Provider store={store}>
      <Suspense fallback={<Loader />}><App /> </Suspense>
  </Provider>,
  document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
