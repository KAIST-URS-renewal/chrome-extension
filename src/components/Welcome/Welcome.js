import React from 'react';
import style from './Welcome.module.scss'

export const Welcome = () => {
    return (
        <div>
            <p className={style.serviceName}>
                KAIST URS
            </p>
            <p className={style.information}>
                모든 공용자원을 한곳에서 One-Stop 예약
            </p>
        </div>
        
    )
}