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
  yield takeLatest('ADD_OWNER', addOwner);
  yield takeLatest('DELETE_OWNER', deleteOwner);
  yield takeLatest('FETCH_PETS', fetchPets);
  yield takeLatest('ADD_PET', addPet);
  yield takeLatest('DELETE_PET', deletePet);
  yield takeLatest('EDIT_PET', editPet);

}

// saga calls
function* deletePet(action){
  yield axios({
    method: 'DELETE',
    url: `/pets/${action.payload}`
  });

  yield put({
    type: 'FETCH_PETS'
  });
}

function* editPet(action){
  yield axios({
    method: 'PUT',
    url: `/pets/${action.payload[0]}`
  });

  yield put({
    type: 'FETCH_PETS'
  });
}

function* fetchOwners(action){
  let response = yield axios({
    method: 'GET',
    url: '/owners'
  })
  yield put({
    type: 'SET_OWNERS',
    payload: response.data
  })
  console.log(response.data)
}

function* fetchPets(action){
  let response = yield axios({
    method: 'GET',
    url: '/pets'
  });

  yield put({
    type: 'SET_PETS',
    payload: response.data
  });
}

function* addPet(action){
  console.log('addPet saga hit with:', action.payload);
  yield axios({
    method: 'POST',
    url: '/pets',
    data: action.payload
  });

  put({
    type: 'FETCH_PETS'
  });
}

function* addOwner(action){
  console.log('New Owner ACTION PAYLOAD', action.payload);
  let response = yield axios ({
    method: 'POST',
    url: '/owners',
    data: action.payload
  })
  yield put({
    type: 'FETCH_OWNERS',
    payload: response.data
  })
  console.log(response.data)
}

function* deleteOwner(action){
  console.log('delete Owner ACTION PAYLOAD', action.payload);
  let response = yield axios ({
    method: 'DELETE',
    url: `/owners/${action.payload}`,
    data: action.payload
  })
  yield put({
    type: 'FETCH_OWNERS',
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

const petsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PETS':
      return action.payload;
    default:
      return state;
  }
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    ownersReducer,
    petsReducer
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
