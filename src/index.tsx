import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from "./reducers/rootReducer";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './fontAwesomeConfig';
import { App } from './components/App/App';
import {downloadAllSongs} from "./actions/actions";

import './styles/main.scss';

const store = createStore(rootReducer, applyMiddleware(thunk));
try {
    store.dispatch(downloadAllSongs() as any);
} catch(e) {

}

export const ToRender = <Provider store={store}>
    <App />
</Provider>;

ReactDOM.render(ToRender, document.getElementById('root') || document.createElement('div'));