import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';
import logger from 'redux-logger';
import App from './components/App/App';
import reportWebVitals from './tests/reportWebVitals';
import axios from 'axios';

// rootSaga
function* rootSaga() {
  yield takeLatest('FETCH_OWNERS', fetchOwners);
}

// saga calls
function* fetchOwners(action){
  let response = yield axios ({
    method: 'GET',
    url: '/owners'
  })
  yield put({
    type: 'SET_OWNERS',
    payload: response.data
  })
  console.log(response.data)
}

// reducer calls
const ownersReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_OWNERS':
      return action.payload;
    default:
      return state;
  }
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    ownersReducer
  }),
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
