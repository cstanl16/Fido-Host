import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Auth0ProviderWithHistory from "./auth0-provider-with-history";

const domain = 'process.env.REACT_APP_AUTH0_DOMAIN';
const clientId = 'process.env.REACT_APP_AUTH0_CLIENT_ID';

ReactDOM.render(
  <React.StrictMode>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
//serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
