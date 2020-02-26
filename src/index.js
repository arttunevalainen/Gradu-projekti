import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './state';
import './index.css';
import App from './App';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './state/rootSaga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(
    applyMiddleware(logger),
    applyMiddleware(sagaMiddleware)
    // other store enhancers if any
);

const store = createStore(
    rootReducer,
    enhancer
);

// Run saga.
sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
