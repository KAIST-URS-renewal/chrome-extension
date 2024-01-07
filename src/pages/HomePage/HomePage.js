import React, {useEffect} from 'react';
import {} from '../../utils/urs';
import {getFacility, setFacility} from 'src/utils/local';

export const HomePage = () => {
  useEffect(() => {
    const helper = async () => {
      await setFacility('mango cookie!');
      const facilityInfo = await getFacility();
    };
    helper();
  }, []);

  return <div>HomePage</div>;
};
