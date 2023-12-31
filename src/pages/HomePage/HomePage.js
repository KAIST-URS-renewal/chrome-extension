import React, {useEffect} from 'react';
import {getReservation, getResource} from 'src/data/urs';
import {getFacility, getMyReservation, getUserInfo} from 'src/data/urs';
import {} from 'src/data/urs';
import dayjs from 'dayjs';
import {getReservationDetails} from '../../data/urs/getReservationDetails';

export const HomePage = () => {
  useEffect(() => {
    const helper = async () => {
      // // get reservation Details
      // const reservationDetails = await getReservationDetails(
      //   '0000000514',
      //   '003507812',
      // );
      // console.log(
      //   `reservationDetails is ${JSON.stringify(reservationDetails)}`,
      // );
      // get reservation information
      // const reservationJson = await getReservation(
      //   '0000000501',
      //   dayjs('2023-12-31'),
      // );
      // console.log(`reservationJson is ${JSON.stringify(reservationJson)}`);
      // // get user infromation
      // const userJson = await getUserInfo();
      // console.log(`userJson is ${JSON.stringify(userJson)}`);
      // // get user reservation info
      // const myReservationJson = await getMyReservation();
      // console.log(`myreservationJson is ${JSON.stringify(myReservationJson)}`);
      //
      // // get facility information
      // const facilityJson = await getFacility();
      // console.log(`facilityJson is ${JSON.stringify(facilityJson)}`);
      //
      // // get resource information
      // const resourceJson = await getResource(facilityJson);
      // console.log(`resourceJson is ${JSON.stringify(resourceJson)}`);
    };
    helper();
  }, []);

  return <div>HomePage</div>;
};
