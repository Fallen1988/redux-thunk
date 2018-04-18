import { createStore, applyMiddleware } from 'redux';
// TODO: HOMEWORK 9: install and import thunk middleware
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import { autoRehydrate, persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './';

const loggerMiddleware = createLogger();

// TODO: HOMEWORK 9: apply thunk middleware
const store = createStore(
    reducer,
    undefined,
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
        ),
        autoRehydrate()));

persistStore(store, { whitelist: ['user'] });

export default store;
