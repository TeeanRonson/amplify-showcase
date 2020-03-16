import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Amplify, { Auth } from 'aws-amplify';
import { cognito, oauth} from './config'

Amplify.configure({
    Auth: {
        mandatorySignIn: true,
        region: cognito.REGION,
        userPoolId: cognito.USER_POOL_ID,
        identityPoolId: cognito.IDENTITY_POOL_ID,
        userPoolWebClientId: cognito.APP_CLIENT_ID
    },
    API: {
        //TODO
    }
})

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
