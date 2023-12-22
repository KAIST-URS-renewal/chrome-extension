import React, { useEffect } from 'react';
import { getFacility } from 'src/data/urs';

export const HomePage = () => {
    useEffect(() => {
        const helper = async () => {
            await getFacility();
        };
        helper();
    }, []);

    return <div>HomePage</div>;
};
