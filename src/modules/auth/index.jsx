import React from 'react';
import { Route } from 'react-router-dom';
import { LoginPage } from './containers/login-page';

export const AuthModule = () => {
  console.log('I ma here');
  return (
    <>
      <Route path="/auth" component={LoginPage} />
      <Route path="/auth/login" component={LoginPage} />
    </>
  );
};
