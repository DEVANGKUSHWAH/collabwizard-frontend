import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from "axios";
import App from './app/App';
import * as _redux from "./redux";
import store, { persistor } from "./redux/store";

_redux.setupAxios(axios, store);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
