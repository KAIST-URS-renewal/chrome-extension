const superagent = require('superagent');
var HTMLParser = require('node-html-parser');
var _ = require('lodash');

const getUserInfoHtml = async facilityId => {
  try {
    const res = await superagent
      .post('/urs/rsv/app/cmn/RsvAppCmn001M02.do')
      .accept('application/json')
      .field('prgrId', facilityId);

    return res.text;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const parseUserInfoHtml = res => {
  if (!res) {
    console.error('Invalid input for parse UserInfo Html function.');
    return null;
  }

  const root = HTMLParser.parse(res).removeWhitespace();

  const userName = root.querySelector('#rsvtAppEmplNm').getAttribute('value');
  const userCell = root.querySelector('#rsvtAppHpNo').getAttribute('value');
  const userEmail = root
    .querySelector('#rsvtAppEmailAddr')
    .getAttribute('value');

  var json = new Object();

  json.userName = userName;
  json.userCell = userCell;
  json.userEmail = userEmail;

  return json;
};

export const getUserInfo = async () => {
  //const start = Date.now();
  const html = await getUserInfoHtml(0);

  const userInfo = parseUserInfoHtml(html);
  //console.log(userInfo);

  //const end = Date.now();
  //console.log(`Execution time of facility: ${end - start} ms`);

  return userInfo;
};
