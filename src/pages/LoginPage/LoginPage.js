import React from 'react';
import {LoginForm} from 'src/components/LoginForm';
import {Welcome} from 'src/components/Welcome';
import style from './LoginPage.module.scss';

export const LoginPage = () => {
  return (
    <div className={style.loginPage}>
      <div className={style.loginItem}>
        <Welcome />
      </div>

      <div className={style.loginItem}>
        <LoginForm />
      </div>
    </div>
  );
};
