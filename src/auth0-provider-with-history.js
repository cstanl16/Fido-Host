import React from "react";
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
    const history = useHistory();
    const domainVar = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientIdVar = process.env.REACT_APP_AUTH0_CLIENT_ID;

    const onRedirectCallback = (appState) => { 
        history.push(appState?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain={domainVar}
            clientId={clientIdVar}
            redirectUri={window.location.origin}
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithHistory; 