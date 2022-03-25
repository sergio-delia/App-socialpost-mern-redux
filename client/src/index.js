import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

/* La creazione di uno store, quando vengono implementati i middleware (con redux quando si effettuano chiamate API è necessario) è così */
const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(

<Provider store={store}>
<App />
</Provider>,
document.getElementById('root')
);