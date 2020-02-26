import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './state';
import './index.css';
import App from './App';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './state/rootSaga';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create logger with options.
const logger = createLogger({
    collapsed: true
});

// Create enhancers and apply middleware to redux.
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(logger),
);

// Create store with root reducers and enhancers
const store = createStore(
    rootReducer,
    enhancer
);

// Run saga.
sagaMiddleware.run(rootSaga)

// Render app.
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
