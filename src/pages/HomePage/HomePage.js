import React, { useEffect } from 'react';
import { getFacility, getMyReservation } from 'src/data/urs';

export const HomePage = () => {
    useEffect(() => {
        const helper = async () => {
            await getMyReservation();
        };
        helper();
    }, []);

    return <div>HomePage</div>;
};
