const superagent = require('superagent');
var HTMLParser = require('node-html-parser');
var _ = require('lodash');

const getFacilityHtml = async (idx) => {
    try {
        const res = await superagent
            .post('/urs/rsv/sch/cmn/RsvSchCmn002M01.do')
            .accept('application/json')
            .field('searchKeyword', '')
            .field('searchTitle', 'title')
            .field('pageIndex', idx);
        //console.log(`res is ${res.text}`)
        return res.text;
    } catch (err) {
        console.error(err);
        return null;
    }
};

const parseFacilityHtml = (res) => {
    if (!res) {
        console.error('Invalid input for parse Facility Html function.');
        return new Array();
    }
    const root = HTMLParser.parse(res).removeWhitespace();

    // get search list from html
    const search_list = root.querySelectorAll('.srch_list');

    var facilityJSONArr = new Array();

    // use lodash to iterate through search list
    _.forEach(search_list, (value) => {
        var json = new Object();
        // console.log(value.querySelector("p > a").text)
        // get facility name
        const facilityName = value.querySelector('p > a').text;

        // console.log(`facilityName: ${facilityName}`)

        // get facility id
        const facilityRegisterUrl = value
            .querySelector('p > a')
            .getAttribute('href');
        const facilityId = _.split(facilityRegisterUrl, 'prgrId=')[1];

        // if facilityId is undefined, then it means it is libit resource.
        // skip for libit resource for now
        if (!facilityId) {
            // skip libit resource
            return;
        }

        //console.log(`facilityurl: ${facilityRegisterUrl}`)
        // console.log(`facilityId: ${facilityId}`);

        // get facility information
        const facilityInfo = value.querySelector('dl > dd').text;
        // console.log(`facilityInfo: ${facilityInfo}`)

        // get facility usage
        const facilityUsage = value.querySelector(
            'dl:nth-of-type(3) > dd'
        ).text;
        // console.log(`facilityUsage: ${facilityUsage}`)

        // get facility manager
        const facilityManager = value.querySelector(
            'dl:nth-of-type(4) > dd'
        ).text;
        // console.log(`facilityManager: ${facilityManager}`)

        // get facility registered date
        const facilityRegisterDate = value.querySelector(
            'dl:nth-of-type(5) > dd'
        ).text;
        // console.log(`facilityRegisterDate: ${facilityRegisterDate}`)

        // get resource information
        const resourceInfo = value.querySelector('dl:nth-of-type(2) > dd').text;
        // console.log(`resourceInfo: ${resourceInfo}`)

        json.facilityName = facilityName;
        json.facilityRegisterUrl = facilityRegisterUrl;
        json.facilityId = facilityId;
        json.facilityInfo = facilityInfo;
        json.facilityUsage = facilityUsage;
        json.facilityManager = facilityManager;
        json.facilityRegisterDate = facilityRegisterDate;
        json.resourceInfo = resourceInfo;

        //console.log(`json is ${JSON.stringify(json)}`)
        facilityJSONArr.push(json);
    });

    //console.log(`facilityJSONArr is ${JSON.stringify(facilityJSONArr)}`);
    return facilityJSONArr;
};

export const getFacility = async () => {
    const start = Date.now();

    // fetch all htmls asynchronously
    const htmls = await Promise.all(
        _.map(_.range(1, 20), (idx) => {
            return getFacilityHtml(idx);
        })
    );
    //console.log(`htmls are ${htmls}`)

    // iterate through htmls and get facility information
    const facilityInfo = _.flatten(
        _.map(htmls, (html) => {
            return parseFacilityHtml(html);
        })
    );

    console.log(facilityInfo);
    const end = Date.now();
    console.log(`Execution time of getFacility: ${end - start} ms`);

    return facilityInfo;
};
