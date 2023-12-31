import dayjs from 'dayjs';
const superagent = require('superagent');
let HTMLParser = require('node-html-parser');
let _ = require('lodash');

const getReservationDetailsHtml = async (facilityId, reservationId) => {
  try {
    const res = await superagent
      .get('/urs/rsv/app/cmn/RsvAppCmn004M02.do')
      .query({searchPrgrId: facilityId})
      .query({searchRsvtId: reservationId});
    return res.text;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const parseReservationDetailsHtml = res => {
  const root = HTMLParser.parse(res).removeWhitespace();
  const reservationId = root.querySelector(
    '#divPrint > table > tbody > tr:nth-child(5) > td',
  ).text;
  const reservationStatus = root.querySelector(
    '#divPrint > table > tbody > tr:nth-child(4) > td',
  ).text;
  const reserverName = root.querySelector(
    '#divPrint > table > tbody > tr:nth-child(6) > td:nth-child(9)',
  ).text;
  const reserverCell = root.querySelector(
    '#divPrint > table > tbody > tr:nth-child(7) > td:nth-child(3)',
  ).text;
  const reserverEmail = root.querySelector(
    '#divPrint > table > tbody > tr:nth-child(7) > td:nth-child(9)',
  ).text;
  const reservationReason = root.querySelector(
    '#divPrint > table > tbody > tr:nth-child(13) > td',
  ).text;

  const dateTimeText = root.querySelector(
    '#divPrint > table > tbody > tr:nth-child(9) > td',
  ).text;
  console.log(dateTimeText);
  const dateTime = _.split(dateTimeText, '~');
  const startDateTime = dayjs(dateTime[0].trim()).format('YYYY-MM-DD HH:mm');
  const endDateTime = dayjs(dateTime[1].trim()).format('YYYY-MM-DD HH:mm');

  let json = {};
  json.reservationId = reservationId;
  json.reservationStatus = reservationStatus;
  json.reserverName = reserverName;
  json.reserverCell = reserverCell;
  json.reserverEmail = reserverEmail;
  json.reservationReason = reservationReason;
  json.startDateTime = startDateTime;
  json.endDateTime = endDateTime;

  return json;
};

export const getReservationDetails = async (facilityId, reservationId) => {
  const html = await getReservationDetailsHtml(facilityId, reservationId);
  const reservationDetails = parseReservationDetailsHtml(html);
  return reservationDetails;
};
