import React, { useEffect } from 'react';
import { getFacility, getMyReservation, getUserInfo } from 'src/data/urs';
import {} from 'src/data/urs';

export const HomePage = () => {
    useEffect(() => {
        const helper = async () => {
            await getUserInfo();
        };
        helper();
    }, []);

    return <div>HomePage</div>;
};
