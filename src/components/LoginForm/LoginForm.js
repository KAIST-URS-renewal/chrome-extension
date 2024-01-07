import React from 'react';
import style from './LoginForm.module.scss';

export const LoginForm = () => {
  return (
    <div className={style.loginForm}>
      <div className={style.loginBox}>
        <p className={style.subtitle}>For KAIST members</p>

        <div id={style.ssoBtn}>
          <a href="/urs/cmn/ath/lgn/CmnAthLgn001M01_p.do">KAIST SSO Login</a>
        </div>
      </div>
      <hr className={style.divider} />

      <div>
        <p className={style.subtitle}>For non-KAIST members</p>
        <form className={style.form}>
          <label className={style.label}>아이디</label>
          <input className={style.inputBox} />
          <label className={style.label}>비밀번호</label>
          <input className={style.inputBox} type="password" />
          <input id={style.submitBtn} type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};
