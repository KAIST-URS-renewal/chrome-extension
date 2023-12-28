import React, { useEffect } from 'react';
import { getResource } from 'src/data/urs';
import { getFacility, getMyReservation, getUserInfo } from 'src/data/urs';
import {} from 'src/data/urs';

export const HomePage = () => {
    useEffect(() => {
        const helper = async () => {
            const facilityJson = await getFacility();
            //console.log(`facilityJson is ${facilityJson}`)
            await getResource(facilityJson);
        };
        helper();
    }, []);

    return <div>HomePage</div>;
};
