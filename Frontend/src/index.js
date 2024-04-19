import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthContextProvider from './Context/AuthContext'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.render(

  <React.StrictMode>
    <GoogleOAuthProvider clientId="324820848910-j58041jifk3ve7c5jekoif073s5o2r7m.apps.googleusercontent.com">
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);