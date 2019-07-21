import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from "./reducers/rootReducer";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { App } from './components/App';
import {downloadCoordinates, downloadNewCoordinates} from "./actions/actions";
import {REFRESH_MAP_TIME_IN_MILLIS} from "./Config";

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(downloadCoordinates() as any);

setInterval(() => {
    store.dispatch(downloadNewCoordinates() as any);
}, REFRESH_MAP_TIME_IN_MILLIS);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));