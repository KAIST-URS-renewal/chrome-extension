const superagent = require('superagent');
var HTMLParser = require('node-html-parser');
var _ = require('lodash');

const getMyReservationHtml = async (idx) => {
    try {
        const res = await superagent
            .post('/urs/rsv/app/cmn/RsvAppCmn002M01_L.do')
            .accept('application/json')
            .field('pageIndex', idx);

        //console.log(res.text)

        return res.text;
    } catch (err) {
        console.log(err);
        return null;
    }
};

const parseMyReservationHtml = (res) => {
    if (!res) {
        console.log('Invalid input for parse My Reservation Html function');
        return null;
    }

    const root = HTMLParser.parse(res).removeWhitespace();

    const myreservation_list = root.querySelectorAll(
        '.table_list > tbody > tr'
    );

    var myReservationJSONArr = new Array();
    _.forEach(myreservation_list, (value) => {
        var json = new Object();

        // get reservation order
        const reservationOrder = value.querySelector('td:nth-of-type(1)').text;

        // check if search result is empty
        if (
            _.includes(reservationOrder, '없습니다') ||
            _.includes(reservationOrder, 'no')
        ) {
            return myReservationJSONArr;
        }

        // console.log(reservationOrder)

        // reserving Facility id
        const facilityId = value
            .querySelector('td:nth-of-type(2) > a > input:nth-of-type(1)')
            .getAttribute('value');
        // console.log(facilityId)

        // get reservation id
        const reservationId = value
            .querySelector('td:nth-of-type(2) > a > input:nth-of-type(2)')
            .getAttribute('value');
        // console.log(reservationId)

        // get facility & resource name
        const facilityResourceName = value.querySelector(
            'td:nth-of-type(3) > a'
        ).text;
        const facilityName = _.trim(_.split(facilityResourceName, '\n')[0]);
        var resourceName = _.trim(_.split(facilityResourceName, '\n')[1]);

        // if resourceName is undefined, then set it as null
        if (!resourceName) {
            resourceName = null;
        }

        //console.log(facilityName)
        //console.log(resourceName)

        // get checkin datetime
        const reservationCheckinDatetime = _.trim(
            value.querySelector('td:nth-of-type(4) > a').text
        );
        const checkinDate = _.trim(
            _.split(reservationCheckinDatetime, '\n')[0]
        );
        var checkinTime = _.trim(_.split(reservationCheckinDatetime, '\n')[1]);

        if (!checkinTime) {
            checkinTime = null;
        }
        //console.log(reservationCheckinDatetime);

        // get checkout datetime
        const reservationCheckoutDatetime = _.trim(
            value.querySelector('td:nth-of-type(5) > a').text
        );

        const checkoutDate = _.trim(
            _.split(reservationCheckoutDatetime, '\n')[0]
        );
        var checkoutTime = _.trim(
            _.split(reservationCheckoutDatetime, '\n')[1]
        );

        if (!checkoutTime) {
            checkoutTime = null;
        }
        //console.log(reservationCheckoutDatetime)

        // get book datetime
        const reservationBookDatetime = _.trim(
            value.querySelector('td:nth-of-type(8)').text
        );

        const bookDate = _.trim(_.split(reservationBookDatetime, '\n')[0]);
        var bookTime = _.trim(_.split(reservationBookDatetime, '\n')[1]);

        if (!bookTime) {
            bookTime = null;
        }

        //console.log(`reservation Book Date is ${reservationBookDatetime}`)

        // get cancel available date(until)
        const reservationCancelDeadline = _.trim(
            value.querySelector('td:nth-of-type(9)').text
        );
        const deadlineDate = _.trim(
            _.split(reservationCancelDeadline, '\n')[0]
        );
        var deadlineTime = _.trim(_.split(reservationCancelDeadline, '\n')[1]);

        if (!deadlineTime) {
            deadlineTime = null;
        }
        //console.log(`reservationCancelDeadline is ${reservationCancelDeadline}`)

        // get reservation status
        const reservationStatus = _.trim(
            value.querySelector('td:nth-of-type(6) > span').text
        );
        //console.log(`reservationStatus is ${reservationStatus}`)

        json.reservationOrder = reservationOrder;
        json.facilityId = facilityId;
        json.reservationId = reservationId;
        json.facilityName = facilityName;
        json.resourceName = resourceName;
        json.checkinDate = checkinDate;
        json.checkinTime = checkinTime;
        json.checkoutDate = checkoutDate;
        json.checkoutTime = checkoutTime;
        json.bookDate = bookDate;
        json.bookTime = bookTime;
        json.cancelDeadlineDate = deadlineDate;
        json.cancelDeadlineTime = deadlineTime;
        json.reservationStatus = reservationStatus;

        myReservationJSONArr.push(json);
    });

    return myReservationJSONArr;
};

export const getMyReservation = async () => {
    const start = Date.now();

    // get htmls asynchronously
    const htmls = await Promise.all(
        _.map(_.range(1, 5), (idx) => {
            return getMyReservationHtml(idx);
        })
    );

    // iterate through htmls and get my reservation information
    const myReservationInfo = _.flatten(
        _.map(htmls, (html) => {
            return parseMyReservationHtml(html);
        })
    );
    console.log(myReservationInfo);
    const end = Date.now();
    console.log(`Execution time of getFacility: ${end - start} ms`);

    return myReservationInfo;
};
