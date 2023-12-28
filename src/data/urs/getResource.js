const superagent = require('superagent');
var HTMLParser = require('node-html-parser');
var _ = require('lodash');

const getResourceHtml = async (facilityId) => {
    try {
        const res = await superagent
            .post('/urs/rsv/app/cmn/RsvAppCmn001M03.do')
            .accept('application/json')
            .field('prgrId', facilityId);
        //console.log(`facilityId: ${facilityId}`)
        //console.log(res.text)
        return res.text;
    } catch (error) {
        console.error(error);
        return null;
    }
};

const parseResourceHtml = (res) => {
    if (!res) {
        console.error('Invalid input for parse Resource Html function.');
        return null;
    }
    const root = HTMLParser.parse(res).removeWhitespace();

    //// console.log(`root is ${root}`)

    const facilityId = root.querySelector('#prgrId').getAttribute('value');

    // get resource table
    const resource_list = root.querySelectorAll('.table_list > tbody > tr');

    var resourceJSONArr = new Array();

    if (!resource_list || _.isEmpty(resource_list)) {
        // console.error("resource list not found");
        return resourceJSONArr;
    }
    // console.log(resource_list)

    _.forEach(resource_list, (value) => {
        var json = new Object();

        // console.log(`getResource for each: value is ${value}`)

        // get resource id
        const resourceId = value
            .querySelector('td > input')
            .getAttribute('value');
        // console.log(`resourceId: ${resourceId}`);

        // get resource name
        const resourceName = value.querySelector('td:nth-of-type(2)').text;
        // console.log(`resourceName: ${resourceName}`);

        // get resource location
        var resourceLocation = value.querySelector('td:nth-of-type(3)').text;
        if (
            _.isEqual(resourceLocation, 'N/A') | _.isEqual(resourceLocation, '')
        ) {
            resourceLocation = null;
        }
        // console.log(`resourceLocation: ${resourceLocation}`);

        // resource bldg #
        var resourceBldg = value.querySelector('td:nth-of-type(4)').text;
        if (_.isEqual(resourceBldg, 'N/A') | _.isEqual(resourceBldg, '')) {
            resourceBldg = null;
        }
        // console.log(`resourceBldg: ${resourceBldg}`)

        // get resource floor
        var resourceFloor = value.querySelector('td:nth-of-type(5)').text;
        if (_.isEqual(resourceFloor, 'N/A') | _.isEqual(resourceFloor, '')) {
            resourceFloor = null;
        }
        // console.log(`resourceFloor: ${resourceFloor}`)

        // get resource room #
        var resourceRoom = value.querySelector('td:nth-of-type(6)').text;
        if (_.isEqual(resourceRoom, 'N/A') | _.isEqual(resourceRoom, '')) {
            resourceRoom = null;
        }
        // console.log(`resourceRoom: ${resourceRoom}`)

        // get resource capacity
        var resourceCapacity = value.querySelector('td:nth-of-type(7)').text;
        if (
            _.isEqual(resourceCapacity, 'N/A') | _.isEqual(resourceCapacity, '')
        ) {
            resourceCapacity = null;
        }
        // console.log(`resourceCapacity: ${resourceCapacity}`)

        json.resourceId = resourceId;
        json.resourceName = resourceName;
        json.resourceLocation = resourceLocation;
        json.resourceBldg = resourceBldg;
        json.resourceFloor = resourceFloor;
        json.resourceRoom = resourceRoom;
        json.resourceCapacity = resourceCapacity;
        json.facilityId = facilityId;

        resourceJSONArr.push(json);
    });

    return resourceJSONArr;
};

export const getResource = async (facilityJsonArray) => {
    //console.log(`facilityJsonArray is ${facilityJsonArray}`)
    const start = Date.now();

    const htmls = await Promise.all(
        _.map(facilityJsonArray, (facilityInfo) => {
            //console.log(`facility id is ${facilityInfo.facilityId}`)
            return getResourceHtml(facilityInfo.facilityId);
        })
    );
    //console.log(`htmls is ${htmls}`)

    const resourceInfo = _.flatten(
        _.map(htmls, (html) => {
            return parseResourceHtml(html);
        })
    );

    //console.log(resourceInfo);
    const end = Date.now();
    console.log(`Execution time of getResource: ${end - start} ms`);
    return resourceInfo;
};
