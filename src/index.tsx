import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import store from './store'
import { Provider } from 'react-redux'

/* Programmer commentary:
* The imports in this project are scattered in a random order.
* This project lacks a static ESlint code handler,
* and the Prettier formatter should also be added.
* */

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        {/*
        * Because of the poor setting of "@redux/toolkit".
        * It is not necessary to wrap our application into "<Provider>".
        */}
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
