import React from 'react';
import style from './LoginForm.module.scss';

export const LoginForm = () => {
    return (
        <div>
            <div>
                <p className={style.subtitle}>For KAIST members</p>

                <div id={style.ssoBtn}>
                    <a href="/urs/cmn/ath/lgn/CmnAthLgn001M01_p.do">
                        KAIST SSO Login
                    </a>
                </div>
            </div>
            <div>
                <p className={style.subtitle}>For non-KAIST members</p>
                <form>
                    <label className={style.label}>아이디</label>
                    <input />
                    <label className={style.label}>비밀번호</label>
                    <input type="password" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};
