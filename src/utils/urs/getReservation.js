import dayjs from 'dayjs';
const superagent = require('superagent');
let _ = require('lodash');

const getReservationJson = async (facilityId, searchDate, searchTime) => {
  try {
    // convert searchTime to two place digit
    const Time = String(searchTime).padStart(2, '0');
    const Date = dayjs(searchDate).format('YYYY-MM-DD');

    const res = await superagent
      .post('/urs/rsv/app/cmn/RsvAppCmn001M11.do')
      .accept('application/json')
      .field('prgrId', facilityId)
      .field('searchDate', Date)
      .field('searchTime', Time);
    return res.text;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const parseReservationJson = (res, facilityId) => {
  // convert text to json object
  const reservationJson = JSON.parse(res);

  let reservationJSONArr = [];

  let total_slots = 0;
  _.forEach(reservationJson.headList1, info => {
    total_slots += info.cnt;
  });
  //console.log(`total_slots is ${total_slots}`);

  let total_hours = _.size(reservationJson.headList2);
  //console.log(`total_hours is ${total_hours}`);

  const slots_per_hour = total_slots / total_hours;
  //console.log(`slots_per_hour is ${slots_per_hour}`);

  // parse reservationJson and put it to reservationJSONArr
  _.forEach(reservationJson.bodyList, reservationInfo => {
    let json = {};
    if (!_.isEqual(reservationInfo.isVaild, 'Y')) {
      return;
    }
    console.log('world');
    const resourceId = reservationInfo.rssId;
    const resourceName = reservationInfo.rssNm;

    const isReserved = _.isEqual(reservationInfo.tfDivCd, 'T');

    const reservationId = reservationInfo.rsvtId;
    const startDateTime = dayjs(reservationInfo.timeLine).format(
      'YYYY-MM-DD HH:mm',
    );
    const endDateTime = dayjs(reservationInfo.timeLine)
      .add(60 / slots_per_hour, 'minute')
      .format('YYYY-MM-DD HH:mm');
    const reserverName = reservationInfo.rsvtAppEmplNm;

    json.reservationId = reservationId;
    json.facilityId = facilityId;
    json.startDateTime = startDateTime;
    json.endDateTime = endDateTime;
    json.isReserved = isReserved;
    json.resourceId = resourceId;
    json.resourceName = resourceName;
    json.reserverName = reserverName;

    reservationJSONArr.push(json);
  });

  return reservationJSONArr;
};

export const getReservation = async (facilityId, searchDate) => {
  // to get reservation info of full date, we have to request two times
  const res1 = await getReservationJson(facilityId, searchDate, 2);
  const res2 = await getReservationJson(facilityId, searchDate, 14);

  const reservation1 = parseReservationJson(res1, facilityId);
  const reservation2 = parseReservationJson(res2, facilityId);
  const reservationInfo = _.concat(reservation1, reservation2);

  return reservationInfo;
};
