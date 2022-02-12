import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/globals.css";
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import Amplify from '@aws-amplify/core';
import awsconfig from './aws-exports';
Amplify.configure({ ...awsconfig, ssr: true });

const federated = {
  google_client_id: "517072930998-t95t9729vmgccsobl0qa313g6lqso7h6.apps.googleusercontent.com"
};

ReactDOM.render(
  <React.StrictMode>
    <App messages={[]} federated={federated} />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
