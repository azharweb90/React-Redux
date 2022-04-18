import React from 'react';
import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redux/reducers/index';

const store = createStore(rootReducer, composeWithDevTools());

//Version 18 changes
const root = createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>);
