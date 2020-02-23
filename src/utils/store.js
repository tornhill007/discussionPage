import {createStore} from 'redux';

import combineReducers from '../reducers/combineReducers.js';

export default function configureStore() {
    return createStore(
        combineReducers,
    );
}